import firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAtqW69J9rwx-8kPl8e7OcsMbMUpdocCzE",
  authDomain: "extra-income-7a005.firebaseapp.com",
  databaseURL: "https://extra-income-7a005.firebaseio.com",
  projectId: "extra-income-7a005",
  storageBucket: "extra-income-7a005.appspot.com",
  messagingSenderId: "516285620433",
  appId: "1:516285620433:web:5db62780db1fb28178e5f0",
  measurementId: "G-FKM7H6EDG3"
};
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore();