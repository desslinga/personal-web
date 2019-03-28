import { Component, OnInit, EventEmitter } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { ScreenChangeService } from '../services/screen-change.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  imageList : Array<any>;
  screenChangeService: ScreenChangeService;

  openPreview(i): void {
    this.router.navigate([`/work/${this.imageList[i].pageUrl}`]);
  }

  constructor(
    private router: Router
  ) {
    this.imageList = [
      {squareUrl: "image-04.png",
       pageUrl: 'uofthacks-v',
       title: `U of T Hacks V`,
       hoverColor: `#0a010c`,
       titleColor: `#eab973`},
      {squareUrl: "image-02.png",
       title: `Toronto Transit Assets`,
       hoverColor: `#ffffff`,
       titleColor: `#7a8e81`},
      {squareUrl: "image-03.png",
       pageUrl: 'potted-plants',
       title: `Potted Plants Series`,
       hoverColor: `#985c3e`,
       titleColor: `#edd39e`},
      {squareUrl: "image-10.png",
       title: `AMACSS Gaming Events`,
       pageUrl: 'amacss-gaming',
       hoverColor: `#0e1826`,
       titleColor: `#ffd37a`},
      {squareUrl: "image-17.png",
       title: `AMACSS Coffee House`,
       hoverColor: `#72a4c1`,
       titleColor: `#fffaed`},
      {squareUrl: "image-09.png",
       title: `Warm Series`,
       hoverColor: `#e9b455`,
       titleColor: `#652f17`},
      {squareUrl: "image-12.png",
       title: `GO Introduction Brochure`,
       hoverColor: `#2c332c`,
       titleColor: `#e1e6a3`},
      {squareUrl: "image-13.png",
       title: `AMACSS Events - Other`,
       hoverColor: `black`},
      {squareUrl: "image-16.png",
       title: `Floral Series`,
       hoverColor: '#30170e',
       titleColor: `#e28356`}
    ];

    this.imageList.map((img) => {
      img.squareUrl = `./assets/images/gallery/${img.squareUrl}`;
    });
    console.log(this.imageList);

  }

  ngOnInit() {
  }
}
