import { Injectable } from '@angular/core';
import { ReportingDataService } from './reporting-data.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

export interface ResolvedData {
  classes: any;
  students: any;
  activities: any;
}

@Injectable({
  providedIn: 'root'
})
export class ReportingResolverService {

  constructor(private dataService: ReportingDataService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  )
  : Observable<ResolvedData>| Promise<ResolvedData>| ResolvedData 
  {
    const sources = [this.dataService.getClasses(), this.dataService.getActives()];
    return forkJoin(sources).pipe(
      map(([classes, activities]) => {
        const allStudents = [new Set((classes as Array<any>).map(x => x.students).flat())];
        let allActives = [];
        const activitiesResponces = activities as any;
        if(activitiesResponces?.statusCode) allActives = JSON.parse(activitiesResponces.body);
        return {
          classes,
          students: allStudents,
          activities: allActives
        };
      })
    );
  }
}
