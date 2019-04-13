import { Component } from '@angular/core';

/**
* Component Decorator:
*/

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  /**
  * showMenu object is a type of boolean and will be responsible for opening mobile nav:
  */
  showMenu: boolean = true;

}
