// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {Environment} from './interface';

export const environment: Environment = {
  production: false,
  apiKey: 'AIzaSyBmJn1UOZJ4oQp4pJ93qxPEvulRJI9SJi0'

};

export const environmentTest = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyBmJn1UOZJ4oQp4pJ93qxPEvulRJI9SJi0',
    authDomain: 'food-blog-e872d.firebaseapp.com',
    databaseURL: 'https://food-blog-e872d.firebaseio.com',
    projectId: 'food-blog-e872d',
    storageBucket: 'food-blog-e872d.appspot.com',
    messagingSenderId: '698124390871',
    appId: '1:698124390871:web:614b0d50cf91dd311cbb92'
  }
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
