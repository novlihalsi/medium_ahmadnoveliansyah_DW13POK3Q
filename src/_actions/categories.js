import { GET_CATEGORIES, GET_CATEGORIES_ARTICLES } from "../config/constant";
import API from "../services/Api";

export const getCategories = () => {
  return {
    type: GET_CATEGORIES,
    payload: API.getCategory()
  };
};

export const getCategoriesArticles = id => {
  return {
    type: GET_CATEGORIES_ARTICLES,
    payload: API.getCategoryArticles(id)
  };
};
