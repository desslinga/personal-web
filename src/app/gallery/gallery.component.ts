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
       title: `U of T Hacks V`},
     {squareUrl: "image-17.png",
      pageUrl: 'amacss-coffeehouse',
      title: `AMACSS Coffee House`},
     {squareUrl: "image-03.png",
      pageUrl: 'potted-plants',
      title: `Potted Plants Series`},
      {squareUrl: "image-10.png",
       title: `AMACSS Gaming Events`,
       pageUrl: 'amacss-gaming'},
      {squareUrl: "image-09.png",
       pageUrl: 'warm-series',
       title: `Warm Series`},
      {squareUrl: "image-12.png",
       pageUrl: 'go-introduction',
       title: `GO Introduction Brochure`},
      {squareUrl: "image-13.png",
       pageUrl: 'amacss-other',
       title: `AMACSS Events - Other`},
      {squareUrl: "image-16.png",
       pageUrl: 'floral-series',
       title: `Floral Series`,},
      {squareUrl: "image-18.png",
       pageUrl: 'amacss-piday',
       title: `AMACSS Pi Day`}
    ];

    this.imageList.map((img) => {
      img.squareUrl = `./assets/images/gallery/${img.squareUrl}`;
    });
    console.log(this.imageList);

  }

  ngOnInit() {
  }
}
