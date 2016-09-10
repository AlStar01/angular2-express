import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({ selector: '[selectOnFocus]' })
export class SelectOnFocusDirective {

    constructor(private el: ElementRef, private renderer: Renderer) { }

    @HostListener('click') onClick() {
        this.renderer.invokeElementMethod(this.el.nativeElement, 'select');
    }
}