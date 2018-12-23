import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gallery-preview',
  templateUrl: './gallery-preview.component.html',
  styleUrls: ['./gallery-preview.component.scss']
})
export class GalleryPreviewComponent implements OnInit {
  @Input() image: String;

  constructor() {
    console.log(this.image);
    document.body.className = "no-scroll";
  }

  ngOnInit() {
  }

}
