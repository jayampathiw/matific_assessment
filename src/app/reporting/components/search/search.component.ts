import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  @Output() valueChange = new EventEmitter<any>();

  dropdownValue1!: string;
  dropdownValue2!: string;
  startDate!: string;
  endDate!: string;

  onValueChange(): void {
      const searchValues = {
          dropdown1: this.dropdownValue1,
          dropdown2: this.dropdownValue2,
          startDate: this.startDate,
          endDate: this.endDate
      };

      this.valueChange.emit(searchValues);
  }
}
