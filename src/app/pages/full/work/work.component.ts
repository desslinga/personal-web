import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  designImageList: Array<any>;
  projectImageList: Array<any>;
  imageList: Array<any>;

  constructor(private router: Router) {
    this.projectImageList = [
      {squareUrl: "closetr-showcase-img.png",
       pageUrl: 'closetr',
       title: `Closetr`},
      {squareUrl: "waffly-showcase-img.png",
       pageUrl: 'waffly',
       title: `Waffly`},
      {squareUrl: "sparknodes-showcase-img.png",
       pageUrl: 'sparknodes',
       title: `Sparknodes`}
    ];

    this.projectImageList.map((img) => {
      img.squareUrl = `../../../assets/images/work/${img.squareUrl}`;
    });

    this.designImageList = [
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
       title: `AMACSS Events`},
      {squareUrl: "image-16.png",
       pageUrl: 'floral-series',
       title: `Floral Series`}
    ];

    this.designImageList.map((img) => {
      img.squareUrl = `../../../assets/images/gallery/${img.squareUrl}`;
    });
  }

  ngOnInit() {
  }

}
