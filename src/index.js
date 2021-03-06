import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CategoryPage from "./content/CategoryPage";
import ArticleDetails from "./content/ArticleDetails";
import Comment from "./content/Comment";
import Login from "./Login";
import Register from "./Register";
import NewStory from "./content/NewStory";
import YourStories from "./content/YourStories";
import Stats from "./stats/Stats";
import Bookmark from "./content/Bookmark";
import Profile from "./content/Profile";
import ArticlePerson from "./content/articleperson/ArticlePerson";
import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./_redux/store";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/category" component={CategoryPage} />
        <Route exact path="/articledetail" component={ArticleDetails} />
        <Route exact path="/comment" component={Comment} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/newstory" component={NewStory} />
        <Route exact path="/yourstories" component={YourStories} />
        <Route exact path="/stats" component={Stats} />
        <Route exact path="/bookmark" component={Bookmark} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/articleperson" component={ArticlePerson} />
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
