import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gallery-preview',
  templateUrl: './gallery-preview.component.html',
  styleUrls: ['./gallery-preview.component.scss']
})
export class GalleryPreviewComponent implements OnInit {
  @Input() image: String;
  @Output() prevEmit: EventEmitter<Object> = new EventEmitter<Object>();

  constructor() {
    console.log(this.image);
    document.body.className = "no-scroll";
  }

  ngOnInit() {
  }

  closePreview(): void {
    this.image = "";
    document.body.className = "";
    this.prevEmit.emit('close');
  }

}
