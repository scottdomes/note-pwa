import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import App from './App';
import './index.css';
import SECRETS from './config/secrets';

const config = {
  apiKey: SECRETS.firebase,
  authDomain: "note-pwa-d880f.firebaseapp.com",
  databaseURL: "https://note-pwa-d880f.firebaseio.com",
  projectId: "note-pwa-d880f",
  storageBucket: "note-pwa-d880f.appspot.com",
  messagingSenderId: "469751265888"
};
firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
