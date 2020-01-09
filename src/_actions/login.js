import { LOGIN } from "../config/constant";

export const login = islogin => {
  return {
    type: LOGIN,
    payload: islogin
  };
};
