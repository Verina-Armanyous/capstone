import firebase from 'firebase';
var firebaseConfig = ({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APPMEASUREMENT_ID 
});

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
var storage = firebase.storage();
  
export {db, storage}