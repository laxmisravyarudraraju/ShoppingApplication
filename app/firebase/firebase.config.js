import firebase from "firebase/app";

import Auth from "firebase/auth";
import fireStore from "firebase/firestore";

const config = {
    apiKey: "AIzaSyDni1OElE6P42_NwEaGPSfghRrHwW33Qf8",
    authDomain: "shoppingwebsite-af14a.firebaseapp.com",
    databaseURL: "https://shoppingwebsite-af14a.firebaseio.com",
    projectId: "shoppingwebsite-af14a",
    storageBucket: "shoppingwebsite-af14a.appspot.com",
    messagingSenderId: "248540945873",
    appId: "1:248540945873:web:f529b7982efc0ef8b514f0",
    measurementId: "G-PH1WZRXTR2",
};

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
    'prompt': "select_account"
});

export const signInWithGoogle = () => firebase.auth().signInWithPopup(provider)

export default firebase