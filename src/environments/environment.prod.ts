import {Environment} from './interface';

export const environment: Environment = {
  production: true,
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
