const firebaseConfig = {
  apiKey: "AIzaSyDP0i8yd2_cd1EpbcVVlfriM4FazDNoJxk",
  authDomain: "gugudan-7a02e.firebaseapp.com",
  projectId: "gugudan-7a02e",
  storageBucket: "gugudan-7a02e.firebasestorage.app",
  messagingSenderId: "266856469384",
  appId: "1:266856469384:web:ff982306125bf68e26a03d",
  measurementId: "G-2JJ3CC5HM4",
  databaseURL: "https://gugudan-7a02e-default-rtdb.firebaseio.com" // fallback URL if needed
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.database();
