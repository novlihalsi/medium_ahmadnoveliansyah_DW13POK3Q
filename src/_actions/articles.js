import {
  GET_ARTICLES,
  GET_DETAIL_ARTICLES,
  GET_ARTICLES_BY_CATEGORIES
} from "../config/constant";
import API from "../services/Api";
import axios from "axios";
export const getArticles = () => {
  return {
    type: GET_ARTICLES,
    payload: API.getArticles()
  };
};

export const getDetailarticles = id => {
  return {
    type: GET_DETAIL_ARTICLES,
    payload: API.getDetailArticles(id)
  };
};

export const getArticlesbycategories = id => {
  return {
    type: GET_ARTICLES_BY_CATEGORIES,
    payload: API.getArticlesbycategories(id)
  };
};
