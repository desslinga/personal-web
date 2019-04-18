import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'defn',
  template: `<span class="defn"><ng-content></ng-content></span>`
})
export class DefnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
