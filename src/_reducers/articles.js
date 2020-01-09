import {
  GET_ARTICLES,
  GET_ARTICLES_FULFILLED,
  GET_DETAIL_ARTICLES,
  GET_DETAIL_ARTICLES_FULFILLED,
  GET_ARTICLES_BY_CATEGORIES_FULFILLED
} from "../config/constant";

const initialState = {
  articles: [],
  detail_articles: [],
  articlesbycategories: []
};

export const articles = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLES_FULFILLED:
      return {
        ...state,
        articles: action.payload
      };
    case GET_DETAIL_ARTICLES_FULFILLED:
      return {
        ...state,
        detail_articles: action.payload
      };
    case GET_ARTICLES_BY_CATEGORIES_FULFILLED:
      return {
        ...state,
        articlesbycategories: action.payload
      };
    default:
      return state;
  }
};
