import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[mwImage]'
})
export class ImageDirective {
  @HostBinding('class.is-image') isFavorite = true;

  @HostBinding('class.is-image-hovering') hovering = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.hovering = true;
    console.log("jamal");
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hovering = false;
  }
  @Input() set mwImage(value) {
    this.isFavorite = value;
  }

}
