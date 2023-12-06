import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ResultColorDirective } from '../../directives/result-color.directive';

@Component({
  selector: 'app-search-result',
  standalone: true,
  imports: [CommonModule, ResultColorDirective],
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.css'
})
export class SearchResultComponent {
  @Input() tableData: any = [];

  constructor() { }
  
}
