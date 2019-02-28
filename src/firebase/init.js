  import firebase from 'firebase'
  import firestore from 'firebase/firestore'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyARMYAFCUsFOsBB0fba457lu8TfjssDTxk",
    authDomain: "ninja-smoothies-2018.firebaseapp.com",
    databaseURL: "https://ninja-smoothies-2018.firebaseio.com",
    projectId: "ninja-smoothies-2018",
    storageBucket: "ninja-smoothies-2018.appspot.com",
    messagingSenderId: "846670824081"
  };
  
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true })
  
  export default firebaseApp.firestore()