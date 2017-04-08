import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'mw-popup',
  templateUrl: 'app/popup.component.html',
  styleUrls: ['app/popup.component.css']
})
export class PopupComponent {
  notVisible = true;
  @Input() mediaItem;
  @Output() close = new EventEmitter();

  onClose() {
    this.close.emit(this.mediaItem);
  }
  isExist() {
    return this.mediaItem ? false : true;
  }
//image try
imageItems =[
    {
      id: 1,
      image:"./media/01.png"
    },
    {
      id: 2,
      image:"./media/03.png"
    },
    {
      id: 3,
      image:"./media/02.png"
    },
    {
      id: 4,
       image:"./media/04.png"
    }]
  ;


}
