import * as type from "../Types/userType";

import { mainApi as api } from "../../Lib/Api";

export const login = (data) => {
  return async (dispatch) => {
    dispatch({ type: type.USER_REQUEST });
    api
      .post("/auth/login", data)
      .then((response) => {
        localStorage.setItem("token", response.data.access_token);
        dispatch({ type: type.GET_USER_SUCCESS, data, token: response.data.access_token, success: "Login Success" });
      })
      .catch((err) => {
        if (err && err.response && err.response.data) {
          if (err.response.data.statusCode === 401) {
            dispatch({ type: type.GET_USER_FAILED, error: "Wrong email or password" });
          } else {
            dispatch({ type: type.GET_USER_FAILED, error: err.response.data.message });
          }
        }
      });
  };
};

export const cleanState = () => {
  return (dispatch) => {
    dispatch({ type: type.CLEAN_USER_STATE });
  };
};
