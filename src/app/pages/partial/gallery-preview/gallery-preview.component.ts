import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-gallery-preview',
  templateUrl: './gallery-preview.component.html',
  styleUrls: ['./gallery-preview.component.scss']
})
export class GalleryPreviewComponent implements OnInit {
  project: any = '';
  tools: string;
  title: string;

  constructor(private router: Router) {
    this.project = this.router.url.slice(9);
  }

  ngOnInit() {
    switch(this.project) {
      case 'uofthacks-v':
        this.title = "U of T Hacks V";
        this.tools = "Adobe Illustrator, Procreate (with iPad Pro)";
        break;
      case 'potted-plants':
        this.title = "Potted Plants Series";
        this.tools = "ProCreate (with iPad Pro)";
        break;
      case 'amacss-gaming':
        this.title = "AMACSS Gaming Nights";
        this.tools = "ProCreate (with iPad Pro), Adobe Illustrator";
        break;
      case 'go-introduction':
        this.title = "GO Introduction Brochure";
        this.tools = "Adobe Illustrator";
        break;
      case 'floral-series':
        this.title = "Warm Floral Series";
        this.tools = "ProCreate (with iPad Pro)";
        break;
      case 'amacss-coffeehouse':
        this.title = "AMACSS Coffee House";
        this.tools = "ProCreate (with iPad Pro), Adobe Illustrator";
        break;
      case 'amacss-other':
        this.title = "AMACSS Events";
        this.tools = "ProCreate (with iPad Pro), Adobe Illustrator";
        break;
      case 'warm-series':
        this.title = "Warm Series";
        this.tools = "ProCreate (with iPad Pro)";
        break;
      default:
        break;
    }

  }

}
