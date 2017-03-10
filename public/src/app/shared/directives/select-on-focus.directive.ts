import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSelectOnFocus]'
})
export class SelectOnFocusDirective {

  constructor(private ref: ElementRef) { }

}
