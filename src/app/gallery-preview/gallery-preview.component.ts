import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-gallery-preview',
  templateUrl: './gallery-preview.component.html',
  styleUrls: ['./gallery-preview.component.scss']
})
export class GalleryPreviewComponent implements OnInit {
  @Input() image: String;
  @Output() prevEmit: EventEmitter<Object> = new EventEmitter<Object>();

  constructor() {
    $('.site-content').addClass('no-scroll');
    console.log(this.image);
  }

  ngOnInit() {
  }

  closePreview(): void {
    this.image = "";
    $('body').removeClass('no-scroll');
    this.prevEmit.emit('close');
  }

}
