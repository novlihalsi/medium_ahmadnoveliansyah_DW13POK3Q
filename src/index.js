import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CategoryPage from './content/CategoryPage';
import ArticleDetails from './content/ArticleDetails'
import Comment from './content/Comment'
import Login from './Login'
import Register from './Register'
import NewStory from './content/NewStory'
import YourStories from './content/YourStories'
import './index.css';
import {BrowserRouter as Router, Route, Link, } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route exact path="/categorypage" component={CategoryPage}/>
      <Route exact path="/articledetail" component={ArticleDetails}/>
      <Route exact path="/comment" component={Comment}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/newstory" component={NewStory}/>
      <Route exact path="/yourstories" component={YourStories}/>
      
    </div>
  </Router>
  ,document.getElementById('root')
);
