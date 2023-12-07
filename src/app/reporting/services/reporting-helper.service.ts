import { Injectable } from '@angular/core';

@Injectable()
export class ReportingHelperService {
  // All data sources
  allCalsses: any[] = [];
  allStudents: any[] = [];
  allActivities: any[] = []; 
  allActivitiesGroupedByMarks: any[] = []; 

  // search criteria
  selectedClass: any;
  selectedStudent: any;
  startDate: any;
  endDate: any;

  classStudents: any = [];
  classActivityData: any = [];
  classProgressData: any = {
      excellent: 0,
      good: 0,
      ok: 0,
      weak: 0,
      unassigned: 0,
      total: 0
    };
  classDataEmptyMessage: any = ""

  constructor() { }

  init(resolvedData: any) {
    this.allCalsses = resolvedData?.classes;
    this.allStudents = resolvedData?.students;
    this.allActivities = resolvedData?.activities;
    this.allActivitiesGroupedByMarks = resolvedData?.activities?.reduce((acc: any[], curr: any) => {
      const attempts = curr?.attempts;
      if (attempts != null && attempts.values.length  > 0) {
        for(let i = 0; i < attempts.values.length; i++){
          let { id, content, student, time, skill, type } = curr;
          let mark = attempts.values[i];
          let date = attempts.weeks[i];
          acc.push({ id, content, student, time, skill, type, mark, date });
        }
      }
      return acc;
    }, []);
  }

  setSearchValues(value: any): void {
    if(value?.type == 'student') {
      this.selectedStudent = value?.value;
    } else if(value?.type == 'class') {
      this.selectedClass = value?.value;
      this.selectedStudent = null;
      this.classStudents = this.allCalsses.find(c => c?.id == value?.value)?.students || [];
      this.populateProgressData();
    } else if(value?.type == 'startDate') {
      this.startDate = value?.value
    } else if(value?.type == 'endDate') {
      this.endDate = value?.value
    }

    this.populateTableData(); 
  }

  private populateProgressData() {
    let total = 0, excellent = 0, good = 0, ok = 0, weak = 0, unassigned = 0;
    const result = this.allActivitiesGroupedByMarks?.filter(a => this.classStudents.some((s: any) => s == a?.student));
    result.forEach(activity => {
      total++;
      if(activity.mark >= 90){
        excellent++;
      } else if(activity.mark < 90 && activity.mark >= 80) {
        good++;
      } else if(activity.mark < 80 && activity.mark >= 60) {
        ok++;
      } else if(activity.mark < 60 ){
        weak++;
      } else {
        unassigned++;
      }
    });
      this.classProgressData = {
        excellent: ((excellent / total) * 100).toFixed(2),
        good: ((good / total) * 100).toFixed(2),
        ok: ((ok / total) * 100).toFixed(2),
        weak: ((weak / total) * 100).toFixed(2),
        unassigned: ((unassigned / total) * 100).toFixed(2),
        total
      }

    
  }

  private populateTableData() {
    if (this.selectedClass != null && this.selectedStudent != null && this.startDate != null && this.endDate != null) {
      let result = this.allActivitiesGroupedByMarks?.filter(a => a?.student == this.selectedStudent)
        .filter(a => {
          const activityDate = new Date(a.date);
          const resultStartDate = new Date(this.startDate);
          const resultEndDate = new Date(this.endDate);
          return (resultStartDate.getTime() < activityDate.getTime()) && (resultEndDate.getTime() > activityDate.getTime());
        });
      this.classActivityData = result?.map(a => {
        return { dateCompleted: a.date, content: a.content, type: a.type, skillResult: a.mark, timeSpent: a.time, mark: a.mark };
      });
    } else if (this.selectedClass != null && this.selectedStudent != null && this.startDate != null) {
      let result = this.allActivitiesGroupedByMarks?.filter(a => a?.student == this.selectedStudent)
        .filter(a => {
          const activityDate = new Date(a.date);
          const resultDate = new Date(this.startDate);
          return resultDate.getTime() < activityDate.getTime();
        });
      this.classActivityData = result?.map(a => {
        return { dateCompleted: a.date, content: a.content, type: a.type, skillResult: a.mark, timeSpent: a.time, mark: a.mark };
      });

    } else if (this.selectedClass != null && this.selectedStudent != null) {
      const result = this.allActivitiesGroupedByMarks?.filter(a => a?.student == this.selectedStudent);
      this.classActivityData = result?.map(a => {
        return { dateCompleted: a.date, content: a.content, type: a.type, skillResult: a.mark, timeSpent: a.time, mark: a.mark };
      });
    } else if (this.selectedClass != null) {
      const result = this.allActivitiesGroupedByMarks?.filter(a => this.classStudents.some((s: any) => s == a?.student));
      this.classActivityData = result?.map(a => {
        return { dateCompleted: a.date, content: a.content, type: a.type, skillResult: a.skill, timeSpent: a.time, mark: a.mark };
      });
    }

    if(this.classActivityData.length == 0) {
      this.classDataEmptyMessage = `No content has been completed by ${this.selectedStudent} for ${this.startDate} to ${this.endDate}.`
    } else {
      this.classDataEmptyMessage = '';
    }
  }
}
