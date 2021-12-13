import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNonrendu]'
})
export class NonrenduDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.color = '#c93660';
    el.nativeElement.style.backgroundColor = '#2d2e2d';
  }

}
