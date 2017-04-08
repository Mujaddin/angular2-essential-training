import { Component,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-popup-image',
  templateUrl: 'app/popup-image.component.html',
  styleUrls: ['app/popup-image.component.css']
})
export class PopupImageComponent {
  
   @Input() imageItem;
  
  
}
