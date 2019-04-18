import { Component, OnInit, Input } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html'
})
export class PreviewComponent implements OnInit {
  @Input() prevUrl: string;
  @Input() project: string;
  @Input() title: string;
  closeAnimate: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  closePreview(): void {
    this.closeAnimate = true;
    setTimeout(()=> {
      this.router.navigate([`${this.prevUrl}`], {fragment: `${this.project}`});
    }, 300);
  }

}
