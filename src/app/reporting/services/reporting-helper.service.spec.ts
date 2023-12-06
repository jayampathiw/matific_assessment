import { TestBed } from '@angular/core/testing';

import { ReportingHelperService } from './reporting-helper.service';

describe('ReportingHelperService', () => {
  let service: ReportingHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportingHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
