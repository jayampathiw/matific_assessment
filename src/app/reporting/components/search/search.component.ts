import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  @Input() classData: any = [];

  @Input() studentData: any = [];  

  @Output() valueChange = new EventEmitter<any>();

  onDateValueChange(field: string, event: any): void {
    const selectedValue = event.target.value;
    if(!isNaN(new Date(selectedValue).getTime())) this.valueChange.emit({type: field, value: selectedValue});
  }

  onClassValueChange(event: any): void {
    const selectedValue = event.target.value;
    this.valueChange.emit({type: 'class', value: selectedValue});
  }

  onStudentValueChange(event: any): void {
    const selectedValue = event.target.value;
    this.valueChange.emit({type: 'student', value: selectedValue});
  }
}
