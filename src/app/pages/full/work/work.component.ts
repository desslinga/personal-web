import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  imageList : Array<any>;

  constructor(private router: Router) {
    this.imageList = [
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

    this.imageList.map((img) => {
      img.squareUrl = `./assets/images/work/${img.squareUrl}`;
    });
  }

  openPreview(i): void {
    this.router.navigate([`/work/${this.imageList[i].pageUrl}`]);
  }

  ngOnInit() {
  }

}
