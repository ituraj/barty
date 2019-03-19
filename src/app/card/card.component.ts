/**
 * Predefined Angular Import and Input Import:
 */
import { Component, Input } from '@angular/core';

/**
* Component Decorator:
*/

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

/**
 * Export Card Component:
 */
export class CardComponent {

  /**
   * In order to display data in the component I declared Input property:
   */

  @Input() data;
}
