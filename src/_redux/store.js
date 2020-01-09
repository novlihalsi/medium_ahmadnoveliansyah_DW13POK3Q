import { createStore, combineReducers, applyMiddleware } from "redux";
import { articles } from "../_reducers/articles";
import { categories } from "../_reducers/categories";
import logger from "redux-logger";
import promiseMiddleware from "redux-promise-middleware";
import { login } from "../_reducers/login";

const reducers = combineReducers({
  categories,
  articles,
  login
});

const middlewares = [logger, promiseMiddleware];

const store = createStore(reducers, applyMiddleware(...middlewares));

export default store;
