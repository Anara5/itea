import { firebase } from '@firebase/app';
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore';

let config = {
    apiKey: "api-key",
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

  export default firebase;
