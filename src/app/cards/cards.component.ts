import { Component } from '@angular/core';

/**
 * Logic that contains data should be imported from service class:
 */

import { BarService } from '../bar.service';

/**
 * Component Decorator:
 */

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  providers: [BarService]
})
export class CardsComponent {
  /**
   * Empty bars array:
   */
  bars;

  /**
  * Constructor is populating bars array with data from the service:
  */
  constructor(barService: BarService) {
    this.bars = barService.getBars();
  }
  /**
  * I call getBars method of the ProductService object and assign results to empty array:
  */
}
