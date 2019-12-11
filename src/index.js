import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CategoryPage from './content/CategoryPage';
import './index.css';
import {BrowserRouter as Router, Route, Link, } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route exact path="/CategoryPage" component={CategoryPage}/>
    </div>
  </Router>
  ,document.getElementById('root')
);
