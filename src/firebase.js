import firebase from 'firebase/app';

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

export { firebaseConfig as firebase };
