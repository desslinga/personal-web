import { Component, OnInit, EventEmitter } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { ScreenChangeService } from '../services/screen-change.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  imageList : Array<Array<string>>;
  imageListPrev : Array<any>;
  imageListFull: Array<any>;
  previewedProject: Object;
  screenChangeService: ScreenChangeService;

  openPreview(i): void {
    this.previewedProject = "uofthacks_v";
    this.router.navigate(['/work/uofthacks_v']);
  }

  constructor(
    private router: Router
  ) {
    this.imageList = [
      {squareUrl: "image-04.png",
       title: `U of T Hacks V`,
       hoverColor: `yellow`},
      {squareUrl: "image-02.png",
       title: `Toronto Transit Assets`,
       hoverColor: `red`},
      {squareUrl: "image-03.png",
       title: `Potted Plants Series`,
       hoverColor: `green`},
      {squareUrl: "image-10.png",
       title: `AMACSS Events - Gaming`,
       hoverColor: `blue`},
      {squareUrl: "image-17.png",
       title: `AMACSS Coffee House`,
       hoverColor: `purple`},
      {squareUrl: "image-09.png",
       title: `Warm Series`,
       hoverColor: `white`},
      {squareUrl: "image-12.png",
       title: `GO Introduction Brochure`,
       hoverColor: `teal`},
      {squareUrl: "image-13.png",
       title: `AMACSS Events - Other`,
       hoverColor: `black`},
      {squareUrl: "image-16.png",
       title: `Floral Series`,
       hoverColor: 'orange'}
    ];

    this.imageList.map((img) => {
      img.squareUrl = `./assets/images/gallery/${img.squareUrl}`;
    });
    console.log(this.imageList);

  }

  ngOnInit() {
  }
}
