
import firebase from 'firebase/app'
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDIIYWUaklYIfXenZ_U9Q1hMgJBTXj4ovs",
    authDomain: "rent-new.firebaseapp.com",
    projectId: "rent-new",
    storageBucket: "rent-new.appspot.com",
    messagingSenderId: "966018358193",
    appId: "1:966018358193:web:ae987339607bf33cf37b90"
  };
  // Initialize Firebase    
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  // firebaseApp.firestore().settings({timestampsInSnapshots: true})
  export default firebaseApp.firestore()