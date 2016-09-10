import { Directive, ElementRef, Renderer, OnInit } from '@angular/core';

@Directive({ selector: '[autoFocus]' })
export class AutoFocusDirective implements OnInit {

    constructor(private el: ElementRef, private renderer: Renderer) { }

    ngOnInit() {
        this.renderer.invokeElementMethod(this.el.nativeElement, 'focus');
    }
}