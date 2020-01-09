import { LOGIN } from "../config/constant";

const initialState = {
  islogin: false
};

export const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        islogin: action.payload
      };
    default:
      return state;
  }
};
