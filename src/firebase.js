import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/analytics';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBNdDWEUljCI-kBWLSqBw3AHI0ZzFkcK6g',
  authDomain: 'taskytab.firebaseapp.com',
  databaseURL: 'https://taskytab.firebaseio.com',
  projectId: 'taskytab',
  storageBucket: 'taskytab.appspot.com',
  messagingSenderId: '793191596415',
  appId: '1:793191596415:web:f31a5c79ae8799b8e51a4a',
  measurementId: 'G-K05PTFDYGL'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.firestore();
const auth = firebase.auth();
const providerGoogle = new firebase.auth.GoogleAuthProvider();
const providerGithub = new firebase.auth.GithubAuthProvider();

export { db, auth, providerGoogle, providerGithub };

// For Testing Purpose
window.firebase = process.env.NODE_ENV === 'development' ? firebase : undefined;
