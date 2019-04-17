import { Component, OnInit, Input } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  @Input() project: string;
  @Input() title: string;
  closeAnimate: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  closePreview(url: string, fragment: string): void {
    this.closeAnimate = true;
    setTimeout(()=> {
      this.router.navigate([`${url}`], {fragment: `${fragment}`});
    }, 300);
  }

}
