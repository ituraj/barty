/**
 * Service class for BarService
 */

export class BarService {

  /**
   * getBars method of return type will be called by Cards Component
   *
   * @returns the array of data
   */
  getBars() {
    return [
      {
        name: 'Faodail',
        description:
          'Classis Scottish gin bar with variety of herby spirits and intriguing cocktails.',
        imageUrl: './assets/panel-img.png',
        imageAlt: 'Scottish bar',
        visitedDate: new Date(2018, 5, 30),
        rating: 2.25,
        numOfReviews: 2,
        tags: ['Gin', 'Cocktails']
      },
      {
        name: '221B Baker Street',
        description:
          'Everything from coffee to heavy spirits. Stay long enough and you may meet Watson here, but most likely Mrs Hudson.',
        imageUrl: './assets/panel-img2.png',
        imageAlt: 'Dive bar',
        visitedDate: new Date(2018, 7, 13),
        rating: 3,
        numOfReviews: 2,
        tags: ['Beer', 'Spirits', 'Shots']
      },
      {
        name: 'Gringo Bar',
        description:
          'Find some finest Mojitos in this roof top bar and enjoy a little booze and great views.',
        imageUrl: './assets/panel-img3.png',
        imageAlt: 'Mojito bar',
        visitedDate: new Date(2019, 2, 14),
        rating: 0.75,
        numOfReviews: 2,
        tags: ['Mojito', 'Margarita']
      },
      {
        name: 'Mahao',
        description:
          'Vibrant tropical bar and live local entertainment everyday at sunset. Try delicious pink beer, brewed with hibiscus to give it a rich pink hue.',
        imageUrl: './assets/panel-img4.png',
        imageAlt: 'Hawaian beer bar',
        visitedDate: new Date(2019, 1, 24),
        rating: 2.5,
        numOfReviews: 2,
        tags: ['Beer', 'Cocktails']
      },
      {
        name: 'Edison Lamp',
        description:
          'Everything from coffee to heavy spirits. Stay long enough and you may meet Watson here, but most likely Mrs Hudson.',
        imageUrl: './assets/panel-img5.png',
        imageAlt: 'Whiskey bar',
        visitedDate: new Date(2018, 8, 4),
        rating: 1.8,
        numOfReviews: 2,
        tags: ['Whiskey', 'Rum', 'Spirits']
      },
      {
        name: 'Friday Bar',
        description:
          'Your happy place after long week at the office. Join us for amazing happy hour options!',
        imageUrl: './assets/panel-img6.png',
        imageAlt: 'Friday bar',
        visitedDate: new Date(2018, 7, 7),
        rating: 2.25,
        numOfReviews: 2,
        tags: ['Happy Hour', 'Beer', 'Cocktails']
      },
      {
        name: 'Beer Garden',
        description:
          'If you are missing summer nights you can find them all year around in the Beer Garden. Craft beers and chill vibes.',
        imageUrl: './assets/panel-img7.png',
        imageAlt: 'Craft beers',
        visitedDate: new Date(2018, 12, 3),
        rating: 3,
        numOfReviews: 2,
        tags: ['Beer', 'Craft']
      }
    ];
  }
}
