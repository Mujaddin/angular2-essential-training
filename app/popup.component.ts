import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'mw-popup',
  templateUrl: 'app/popup.component.html',
  styleUrls: ['app/popup.component.css']
})
export class PopupComponent {
 notVisible=true;
  @Input() mediaItem;
  @Output() close = new EventEmitter();
 
onClose(){
  this.close.emit(this.mediaItem);
}
  isExist() {
    return this.mediaItem ? false : true;
  }
}
