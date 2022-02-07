import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMxnEx8Wt1Eqp3R1TuN2ncp21frY5CMK4",
  authDomain: "my-sandbox-f8387.firebaseapp.com",
  projectId: "my-sandbox-f8387",
  storageBucket: "my-sandbox-f8387.appspot.com",
  messagingSenderId: "1013210045725",
  appId: "1:1013210045725:web:0f8fa2f6582915c47915f4",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const database = getDatabase(firebaseApp);

export default firebaseApp;
