import { Directive, ElementRef, HostListener, Renderer } from '@angular/core';

@Directive({
  selector: '[appSelectOnFocus]'
})
export class SelectOnFocusDirective {

  constructor(private el: ElementRef, private renderer: Renderer) { }

  @HostListener('click') onclick() {
    this.select();
  }

  private select() {
    this.renderer.invokeElementMethod(this.el.nativeElement, 'select');
  }
}
