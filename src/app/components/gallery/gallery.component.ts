import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @Input() type: string;
  @Input() imageList : Array<any>;

  openPreview(i): void {
    this.router.navigate([`/${this.type}/${this.imageList[i].pageUrl}`]);
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }
}
