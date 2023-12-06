import { Component } from '@angular/core';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { SearchResultComponent } from './components/search-result/search-result.component';

@Component({
  selector: 'app-reporting',
  standalone: true,
  imports: [ProgressBarComponent, SearchComponent, SearchResultComponent],
  templateUrl: './reporting.component.html',
  styleUrl: './reporting.component.css'
})
export class ReportingComponent {

  constructor(private router: ActivatedRoute) {

  }

  ngOnInit() {
    console.log('>>>>>>>>>>>>>>>>> ', this.router?.snapshot?.data?.['resolvedData']);
  }

  handleSearchChange(values: any) {
    console.log('Search values changed:', values);
    // Handle the change here
}

}
