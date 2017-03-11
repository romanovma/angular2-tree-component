import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li><a routerLink="/basic">Basic</a></li>
    </ul>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
}
