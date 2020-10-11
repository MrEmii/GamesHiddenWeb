import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import AppRoutes from './routes';
import firebase from 'firebase/app';

firebase.initializeApp({
  apiKey: "AIzaSyAnsfXZz6Uw56FqhixjK7h7FC3h6k2TSLA",
  authDomain: "gameshidden-fabae.firebaseapp.com",
  databaseURL: "https://gameshidden-fabae.firebaseio.com",
  projectId: "gameshidden-fabae",
  storageBucket: "gameshidden-fabae.appspot.com",
  messagingSenderId: "207637008396",
  appId: "1:207637008396:web:89962edd5e3d79beae9e29",
  measurementId: "G-VGNGW2ZR75"
})

ReactDOM.render(
  <Router>
    <AppRoutes></AppRoutes>
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
