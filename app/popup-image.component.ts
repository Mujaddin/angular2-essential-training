import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-popup-image',
  templateUrl: 'app/popup-image.component.html',
  styleUrls: ['app/popup-image.component.css']
})
export class PopupImageComponent {
  idx = 0;
  @Input() imageItem;

  previous() {

    if (this.idx == 0) {
    this.idx = 0;

    } else {
      this.idx = this.idx - 1;
    }
  }
  next() {

    if (this.idx == this.imageItem.length-1) {
    this.idx = this.imageItem.length-1;
    } else {
      this.idx = this.idx + 1;
    }
  }
}
