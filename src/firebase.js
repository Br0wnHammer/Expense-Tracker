import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"

const app = firebase.initializeApp({
    apiKey: "AIzaSyBxM2SyW0IbZAX6-6VaEiAE4PcA6M6GEjM",
    authDomain: "expense-tracker-2af3e.firebaseapp.com",
    databaseURL: "https://expense-tracker-dev-8bf80-default-rtdb.firebaseio.com",
    projectId: "expense-tracker-2af3e",
    storageBucket: "expense-tracker-2af3e.appspot.com",
    messagingSenderId: "156285750760",
    appId: "1:156285750760:web:5ce56bf00374ec3576e85d"
  })
  
  export const provider = new firebase.auth.GoogleAuthProvider()
  export default app
  