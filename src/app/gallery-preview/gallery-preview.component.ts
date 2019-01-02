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
  closeAnimate: boolean;

  constructor() {
    this.closeAnimate = false;
    console.log(this.image);
  }

  ngOnInit() {
    this.siteContent = document.querySelector('#gallery-preview-container');
    disableBodyScroll(this.siteContent);
  }

  closePreview(): void {
    this.closeAnimate = true;
    setTimeout(()=> {
      this.image = "";
      clearAllBodyScrollLocks();
      this.prevEmit.emit('close');
    }, 300);
  }

}
