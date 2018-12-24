import { Component, OnInit, EventEmitter } from '@angular/core';
import { ScreenChangeService } from '../services/screen-change.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  imageList : Array<Array<any>>;
  imageListPrev : Array<any>;
  imageListFull: Array<any>;
  openedImage: string;
  screenChangeService: ScreenChangeService;

  openPreview(i): void {
    console.log(this.imageListFull[i]);
    this.openedImage = this.imageListFull[i];
  }

  handlePrevEmit(event): void {
    switch (event) {
      case 'close':
        this.openedImage = "";
        break;
      default:
        break;
    }
  }

  constructor(private screenchangeservice: ScreenChangeService) {
    document.body.className = "";
    this.imageList = [
      ["image-01.png","uoft_hacks_tower.png"],
      ["image-02.png","transitassets-01.png"],
      ["image-03.png","plants_v2.png"],
      ["image-04.png","uoft_hacks_skyline.png"],
      ["image-05.png","plants_v1.png"],
      ["image-06.png","go_no_brainer_savings.png"],
      ["image-07.png","go_introduction_3.png"],
      ["image-08.png","go_introduction_2.png"],
      ["image-09.png","girl_with_cats.PNG"],
      ["image-10.png","amacss_gaming_night_2.PNG"],
      ["image-11.png","uoft_hacks_title.png"],
      ["image-12.png","go_introduction_1.png"],
      ["image-13.png","amacss_quiz_night.png"],
      ["image-14.png","amacss_gaming_night_1.png"]
    ];

    this.screenChangeService = screenchangeservice;

    this.imageListPrev = [];
    for (let i = 0; i < this.imageList.length; i++) {
       this.imageListPrev[i] = "./assets/images/gallery/" + this.imageList[i][0];
    }

    this.imageListFull = [];
    for (let i = 0; i < this.imageList.length; i++) {
       this.imageListFull[i] = "./assets/images/gallery/archives/" + this.imageList[i][1];
    }

    this.openedImage = "";

  }

  ngOnInit() {
  }
}
