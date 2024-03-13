import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-pages',
  template: `
<app-common>

  <router-outlet></router-outlet>

</app-common>
  `
})
export class PagesComponent implements OnInit {
  ngOnInit(): void {

  }
}
