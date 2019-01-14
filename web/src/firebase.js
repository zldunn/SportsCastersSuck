import firebase from 'firebase';
// Initialize Firebase
var config = {
  apiKey: "AIzaSyBwUrC7M229miQ27nSqSQJtSbvNwsRva-k",
  authDomain: "sports-casters-suck.firebaseapp.com",
  databaseURL: "https://sports-casters-suck.firebaseio.com",
  projectId: "sports-casters-suck",
  storageBucket: "sports-casters-suck.appspot.com",
  messagingSenderId: "497435523192"
};
firebase.initializeApp(config);
export default firebase;
