import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Home} from './components/home';
import Header from './components/header';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Header />
     
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
