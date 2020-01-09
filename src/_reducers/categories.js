import {
  GET_CATEGORIES,
  GET_CATEGORIES_ARTICLES,
  GET_CATEGORIES_FULFILLED,
  GET_CATEGORIES_ARTICLES_FULFILLED
} from "../config/constant";

const initialState = {
  categories: [],
  categories_articles: []
};

export const categories = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES_FULFILLED:
      return {
        ...state,
        categories: action.payload
      };
    case GET_CATEGORIES_ARTICLES_FULFILLED:
      return {
        ...state,
        categories_articles: action.payload
      };
    default:
      return state;
  }
};
