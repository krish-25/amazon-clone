import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD1V6Q4pS4eQtMxgnRyotJSLTLkyqnv0f8",
    authDomain: "clone-a2037.firebaseapp.com",
    projectId: "clone-a2037",
    storageBucket: "clone-a2037.appspot.com",
    messagingSenderId: "1064571019697",
    appId: "1:1064571019697:web:aa123f6a6e231c02eadd90",
    measurementId: "G-QQZ6PFPRYH"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};