import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

@Component({
  selector: 'app-gallery-preview',
  templateUrl: './gallery-preview.component.html',
  styleUrls: ['./gallery-preview.component.scss']
})
export class GalleryPreviewComponent implements OnInit {
  @Input() image: String;
  @Output() prevEmit: EventEmitter<Object> = new EventEmitter<Object>();
  siteContent: any;

  constructor() {
    this.siteContent = document.querySelector('.site-content');
    console.log(this.image);
    disableBodyScroll(this.siteContent);
  }

  ngOnInit() {
  }

  closePreview(): void {
    this.image = "";
    enableBodyScroll(this.siteContent);
    this.prevEmit.emit('close');
  }

}
