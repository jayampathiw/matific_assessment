import { Directive, ElementRef, Input, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appResultColor]',
  standalone: true
})
export class ResultColorDirective {

  @Input()  appResultColor!: string;

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['appResultColor']) {
      this.changeColor(this.appResultColor);
    }
  }

  private changeColor(activity: any) {
    if(this.el?.nativeElement?.style?.color){
      if(activity.mark >= 90){
        this.el.nativeElement.style.color = "green";
      } else if(activity.mark < 90 && activity.mark >= 80) {
        this.el.nativeElement.style.color = "blue";
      } else if(activity.mark < 80 && activity.mark >= 60) {
        this.el.nativeElement.style.color = "yellow";
      } else if(activity.mark < 60 ){
        this.el.nativeElement.style.color = "red";
      } else {
        this.el.nativeElement.style.color = "lightgray";
      }
    }

    
  }

}
