import { TestBed } from '@angular/core/testing';

import { ReportingResolverService } from './reporting-resolver.service';

describe('ReportingResolverService', () => {
  let service: ReportingResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportingResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
