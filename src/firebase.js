import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAqq6LctEHMdca-5G-tsSmb-8PGueDUxq4",
    authDomain: "my-todoist-clone.firebaseapp.com",
    databaseURL: "https://my-todoist-clone.firebaseio.com",
    projectId: "my-todoist-clone",
    storageBucket: "my-todoist-clone.appspot.com",
    messagingSenderId: "798186882063",
    appId: "1:798186882063:web:eaab97a26221e74e5b4f7a"
});



export { firebaseConfig as firebase };