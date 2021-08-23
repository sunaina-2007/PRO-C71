import * as firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCyvBnTN2LoTH5EIiTTxwNWODThocwjxj0",
  authDomain: "complaint-forum-9d091.firebaseapp.com",
  projectId: "complaint-forum-9d091",
  storageBucket: "complaint-forum-9d091.appspot.com",
  messagingSenderId: "321255172478",
  appId: "1:321255172478:web:adaa1d4c84d451dc592b2f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();