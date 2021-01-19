import { firebase } from '@firebase/app';

import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore';
import Axios from 'axios';

let config = {
    apiKey: "AIzaSyDhKDVfGsgrpGkhyi6SpWpQ1vN_tJWjpIg",
    authDomain: "contact-2301.firebaseapp.com",
    databaseURL: "https://contact-2301-default-rtdb.firebaseio.com",
    projectId: "contact-2301",
    storageBucket: "contact-2301.appspot.com",
    messagingSenderId: "1091233542712",
    appId: "1:1091233542712:web:92ab7ee36a6dfa9ea3eccd",
    measurementId: "G-7MBVV1YCG4"
  };

  // Initialize Firebase
  firebase.initializeApp(config);

  const db = firebase.firestore();

  export {Axios, db};