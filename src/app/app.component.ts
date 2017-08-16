import { Component, HostListener, ViewEncapsulation } from '@angular/core';

import { NAVITEMS } from './app.navigation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app';
  scrolling = false;
  navItems = NAVITEMS;
  
  @HostListener('window:scroll',['$event']) onScroll($event) {
    //console.log(window.scrollY);
    if ( window.scrollY === 0 ) {
      this.scrolling = false;
    } else {
      this.scrolling = true;
    }
  }
}
