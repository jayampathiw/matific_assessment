import { Component } from '@angular/core';

@Component({
  selector: 'app-search-result',
  standalone: true,
  imports: [],
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.css'
})
export class SearchResultComponent {
  tableData = [
    { dateCompleted: new Date(), content: 'Example Content 1', type: 'Type 1', skillResult: 'Result 1', timeSpent: '1h' },
    { dateCompleted: new Date(), content: 'Example Content 1', type: 'Type 1', skillResult: 'Result 1', timeSpent: '1h' },
    { dateCompleted: new Date(), content: 'Example Content 1', type: 'Type 1', skillResult: 'Result 1', timeSpent: '1h' },
    { dateCompleted: new Date(), content: 'Example Content 1', type: 'Type 1', skillResult: 'Result 1', timeSpent: '1h' },
    { dateCompleted: new Date(), content: 'Example Content 1', type: 'Type 1', skillResult: 'Result 1', timeSpent: '1h' },

];
}
