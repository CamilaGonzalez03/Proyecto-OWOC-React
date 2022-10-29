import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCfC2oJJ3OSrAuXxNWPloxWJt2ZaOBSZzg",
  authDomain: "proyecto-owoc-react.firebaseapp.com",
  projectId: "proyecto-owoc-react",
  storageBucket: "proyecto-owoc-react.appspot.com",
  messagingSenderId: "39091300768",
  appId: "1:39091300768:web:abd8b3745b0cbd7a2a5cc5"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//  <React.StrictMode>
    <App />
//  </React.StrictMode>
);


