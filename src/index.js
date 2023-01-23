import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { createStore, createStoreHook, Provider } from 'react-redux';
import cartReducer from './Store/Store';
import store from './Store/Store';



const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <Provider store={store}>

  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  </Provider>
);
