import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

@Component({
  selector: 'app-gallery-preview',
  templateUrl: './gallery-preview.component.html',
  styleUrls: ['./gallery-preview.component.scss']
})
export class GalleryPreviewComponent implements OnInit {
  @Input() image: any;
  @Output() prevEmit: EventEmitter<Object> = new EventEmitter<Object>();
  siteContent: any;

  constructor() {
    this.siteContent = document.querySelector('#home-container');
    console.log(this.image);
  }

  ngOnInit() {
    disableBodyScroll(this.siteContent);
  }

  closePreview(): void {
    this.image = "";
    clearAllBodyScrollLocks();
    this.prevEmit.emit('close');
  }

}
