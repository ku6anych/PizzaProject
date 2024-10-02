import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyB7Oi2N0rXEqYCNLYxKJaKKoEehNRGF_hI',
  authDomain: 'pizzaproject-18563.firebaseapp.com',
  databaseURL: 'https://pizzaproject-18563-default-rtdb.firebaseio.com',
  projectId: 'pizzaproject-18563',
  storageBucket: 'pizzaproject-18563.appspot.com',
  messagingSenderId: '75404794651',
  appId: '1:75404794651:web:b61bf0f1f7702bbc2011be',
  measurementId: 'G-7R8LBD3Z8N',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
