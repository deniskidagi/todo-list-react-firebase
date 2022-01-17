
  // Import the functions you need from the SDKs you need
  import firebase from "firebase/compat/app"
  import "firebase/compat/auth"
  import "firebase/compat/firestore"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDcrCSlYM-mp8hIqwhqnPUcS3JvsaXqh_E",
    authDomain: "todo-list-react-2c985.firebaseapp.com",
    projectId: "todo-list-react-2c985",
    storageBucket: "todo-list-react-2c985.appspot.com",
    messagingSenderId: "300727805471",
    appId: "1:300727805471:web:6df35f2f8924fb0b0b972a"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  
  const db = app.firestore()
  
  export {db}