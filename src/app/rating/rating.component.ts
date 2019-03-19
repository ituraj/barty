import { Component, Input } from '@angular/core';

/**
 * Import of icon used for Rating Component:
 */

import { faGlassMartini } from '@fortawesome/pro-light-svg-icons/faGlassMartini';

/**
 * Component Decorator:
 */

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {

  /**
  * Assigning icon for rating component:
  */

  faGlassMartini = faGlassMartini;
  /**
   * Rating component receives data through Input from Card Component:
   */
  @Input() data;

  /**
  * Suplying the new name to the Input function:
  */

  @Input('rating-value') rating = 0;

  /**
  * Adding number of reviews as an Input:
  */

  @Input() numOfReviews = 0;

  /**
  * Click handler assigning the new value to the rating:
  */
  onClick(ratingValue) {
    this.rating = ratingValue;
  }
}
