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
       hoverColor: `yellow`},
      {squareUrl: "image-02.png",
       hoverColor: `red`},
      {squareUrl: "image-03.png",
       hoverColor: `green`},
      {squareUrl: "image-10.png",
       hoverColor: `blue`},
      {squareUrl: "image-17.png",
       hoverColor: `purple`},
      {squareUrl: "image-09.png",
       hoverColor: `white`},
      {squareUrl: "image-12.png",
       hoverColor: `teal`},
      {squareUrl: "image-13.png",
       hoverColor: `black`},
      {squareUrl: "image-16.png",
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
