import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRendu]'
})
export class RenduDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.color = '#2aa151';
    el.nativeElement.style.backgroundColor = '#2d2e2d';
  }

}
