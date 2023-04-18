import firebase from "firebase/compat/app";
import "firebase/compat/app-check";

const firebaseConfig = {
    apiKey: "AIzaSyD2EV-AO0CI8B1aJDlmZMh4q9I_rpMHlao",
    authDomain: "kith-1835d.firebaseapp.com",
    projectId: "kith-1835d",
    storageBucket: "kith-1835d.appspot.com",
    messagingSenderId: "1041974019679",
    appId: "1:1041974019679:web:96997891496a6bc6733dea"
  };

firebase.initializeApp(firebaseConfig);

const appCheck = firebase.appCheck();
appCheck.activate("6LePw4olAAAAAOBle_XcaqVfNNGqSKkkedrabIe_");

export default firebase;
