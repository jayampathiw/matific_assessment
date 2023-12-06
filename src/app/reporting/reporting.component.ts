import { Component } from '@angular/core';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { ReportingHelperService } from './services/reporting-helper.service';

@Component({
  selector: 'app-reporting',
  standalone: true,
  imports: [ProgressBarComponent, SearchComponent, SearchResultComponent],
  templateUrl: './reporting.component.html',
  styleUrl: './reporting.component.css',
  providers: [ReportingHelperService]
})
export class ReportingComponent {

  constructor(private router: ActivatedRoute, public helperService: ReportingHelperService) {

  }

  ngOnInit() {
    this.helperService.init(this.router?.snapshot?.data?.['resolvedData'] || {})
  }

  handleSearchChange(values: any) {
    console.log('Search values changed:', values);
    this.helperService.setSearchValues(values);
}

}
