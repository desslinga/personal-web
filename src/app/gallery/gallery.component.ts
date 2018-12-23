import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  imageList : Array<string>;
  constructor() {

    this.imageList = [
      "image-01.png",
      "image-02.png",
      "image-03.png",
      "image-04.png",
      "image-05.png",
      "image-06.png",
      "image-07.png",
      "image-08.png",
      "image-09.png",
      "image-10.png",
      "image-11.png",
      "image-12.png",
      "image-13.png",
      "image-14.png"
    ]

    for (let i = 0; i < this.imageList.length; i++) {
       this.imageList[i] = "./assets/images/gallery/" + this.imageList[i];
    }

    console.log(this.imageList, "hello" + "f");
  }

  ngOnInit() {
  }

}
