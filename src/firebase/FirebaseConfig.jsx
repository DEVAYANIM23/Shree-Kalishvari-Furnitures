// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu7tAyc4bZi-1_UxvOgVNV29lsjWx3_e8",
  authDomain: "shree-kalishvari-furnitures.firebaseapp.com",
  projectId: "shree-kalishvari-furnitures",
  storageBucket: "shree-kalishvari-furnitures.appspot.com",
  messagingSenderId: "862672591895",
  appId: "1:862672591895:web:cdf6f79cfbd246d1265052"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }





// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from 'firebase/firestore';
// import { getAuth } from 'firebase/auth';

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDwPdhH6dbZWogeX8bFxLccbLcSkXnPQNM",
//   authDomain: "comfy-sofa-store.firebaseapp.com",
//   projectId: "comfy-sofa-store",
//   storageBucket: "comfy-sofa-store.appspot.com",
//   messagingSenderId: "964284905043",
//   appId: "1:964284905043:web:20f994343ebfa90dda78a6",
//   measurementId: "G-EFDXQNDLEN"
// };
  

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const fireDB = getFirestore(app);
// const auth = getAuth(app);

// export { fireDB, auth }