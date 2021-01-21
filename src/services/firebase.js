import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA9yR-jfa4LhS7_v01Jj5low_aWdjLuYmo",
  authDomain: "turbo-chat-a13be.firebaseapp.com",
  projectId: "turbo-chat-a13be",
  storageBucket: "turbo-chat-a13be.appspot.com",
  messagingSenderId: "150742234071",
  appId: "1:150742234071:web:b5c8595142198cbbc75192",
  measurementId: "G-QWZMC68WXX"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth;
export const db = firebase.database();
