import { TestBed } from '@angular/core/testing';

import { ReportingDataService } from './reporting-data.service';

describe('ReportingDataService', () => {
  let service: ReportingDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportingDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
