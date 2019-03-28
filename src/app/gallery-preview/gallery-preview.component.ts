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
    console.log(this.project);
  }

  ngOnInit() {
    this.siteContent = document.querySelector('#gallery-preview-container');
    disableBodyScroll(this.siteContent);
    console.log(this.project);
    switch(this.project) {
      case 'uofthacks-v':
        this.title = "U of T Hacks V";
        this.tools = "Adobe Illustrator, Procreate (with iPad Pro)";
        this.bgColor = "#0a010c";
        this.mainColor = "#eab973";
        break;
      case 'potted-plants':
        this.title = "Potted Plants Series";
        this.tools = "ProCreate (with iPad Pro)";
        this.bgColor = "#985c3e";
        this.mainColor = "#edd39e";
        break;
      default:
        break;
    }

  }

  closePreview(): void {
    this.closeAnimate = true;
    document.body.className="";
    setTimeout(()=> {
      this.project = "";
      clearAllBodyScrollLocks();
      this.prevEmit.emit('close');
      this.router.navigate(['/work'])
    }, 300);
  }

}
