import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

@Component({
  selector: 'app-gallery-preview',
  templateUrl: './gallery-preview.component.html',
  styleUrls: ['./gallery-preview.component.scss']
})
export class GalleryPreviewComponent implements OnInit {
  @Input() project: any;
  @Output() prevEmit: EventEmitter<Object> = new EventEmitter<Object>();
  siteContent: any;
  closeAnimate: boolean;

  constructor(private router: Router) {
    this.closeAnimate = false;
    //document.body.className="no-scroll";
    this.siteContent = document.querySelector('#gallery-preview-container');
    console.log(this.project);
  }

  ngOnInit() {
    this.siteContent = document.querySelector('#gallery-preview-container');
    disableBodyScroll(this.siteContent);
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
