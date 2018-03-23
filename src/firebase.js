import firebase from "firebase";
const config = {
  apiKey: "AIzaSyDlbewJ9hdP3b6Wvt6fUbsR2T62uD6ezcY",
  authDomain: "raw-chat.firebaseapp.com",
  databaseURL: "https://raw-chat.firebaseio.com",
  projectId: "raw-chat",
  storageBucket: "raw-chat.appspot.com",
  messagingSenderId: "38783357896"
};
export default firebase.initializeApp(config);
