import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: "[appHighlight]"
})
export class AppHighlightDirective{
    @Input() appHighlight;
    @Input() defaultColor;
    constructor(private el: ElementRef){
        // this.el.nativeElement.style.backgroundColor = this.defaultColor;
    }

    @HostListener("mouseenter")
    mouseenter(){
        // console.log("enterred");
        this.el.nativeElement.style.backgroundColor = this.appHighlight || this.defaultColor || "orange";
    }

    @HostListener("mouseleave")
    mouseleave(){
        this.el.nativeElement.style.backgroundColor = "transparent";
    }
}