// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRdWK-SOADYPJA988AwzHBWUWfo8Basq0",
  authDomain: "pab-database.firebaseapp.com",
  databaseURL: "https://pab-database-default-rtdb.firebaseio.com",
  projectId: "pab-database",
  storageBucket: "pab-database.appspot.com",
  messagingSenderId: "1071179193973",
  appId: "1:1071179193973:web:09ffe58dd343933a32a23c",
  measurementId: "G-W01B7H0LJN"
};

// Initialize Firebase
const application = firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics(application);