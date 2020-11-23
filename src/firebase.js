import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCGOk6M2TcyfQxLUeG5bF5lAcO6D9TuLOI",
    authDomain: "fb-clone-41ec1.firebaseapp.com",
    databaseURL: "https://fb-clone-41ec1.firebaseio.com",
    projectId: "fb-clone-41ec1",
    storageBucket: "fb-clone-41ec1.appspot.com",
    messagingSenderId: "369571731652",
    appId: "1:369571731652:web:fbf185d7d483d86768d191",
    measurementId: "G-99N065LQFD"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
