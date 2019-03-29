import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

@Component({
  selector: 'app-gallery-preview',
  templateUrl: './gallery-preview.component.html',
  styleUrls: ['./gallery-preview.component.scss']
})
export class GalleryPreviewComponent implements OnInit {
  project: any = '';
  @Output() prevEmit: EventEmitter<Object> = new EventEmitter<Object>();
  siteContent: any;
  closeAnimate: boolean;
  tools: string;
  title: string;
  bgColor: string;
  mainColor: string;

  constructor(private router: Router) {
    this.closeAnimate = false;
    this.siteContent = document.querySelector('#gallery-preview-container');
    this.project = this.router.url.slice(6);
  }

  ngOnInit() {
    this.siteContent = document.querySelector('#gallery-preview-container');
    //disableBodyScroll(this.siteContent);
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
      case 'amacss-piday':
        this.title = "AMACSS Pi Day";
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

  closePreview(): void {
    this.closeAnimate = true;
    //document.body.className="";
    setTimeout(()=> {
      //clearAllBodyScrollLocks();
      this.prevEmit.emit('close');
      this.router.navigate([`./work`], {fragment: `${this.project}`});
    }, 300);
  }

}
