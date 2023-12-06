import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportingDataService {

  constructor(private http: HttpClient) { }

  getClasses() {
    return this.http.get('https://ljifg6p8cd.execute-api.us-east-1.amazonaws.com/production/matific-test-classes');
  }

  getActives() {
    return this.http.get('https://ljifg6p8cd.execute-api.us-east-1.amazonaws.com/production/matific-test-activities');
  }
}
