import * as type from "../Types/userType";
import Swal from "sweetalert2";
import { mainApi as api } from "../../Lib/Api";

export const login = (data) => {
  return async (dispatch) => {
    dispatch({ type: type.USER_REQUEST });
    api
      .post("/auth/login", data)
      .then((response) => {
        localStorage.setItem("token", response.data.access_token);
        dispatch({
          type: type.GET_USER_SUCCESS,
          data,
          token: response.data.access_token,
          success: Swal.fire({
            title: "Login Success",
            type: "success",
            text: "Enjoy The Shopping!",
          }),
        });
      })
      .catch((err) => {
        if (err && err.response && err.response.data) {
          if (err.response.data.statusCode === 401) {
            dispatch({
              type: type.GET_USER_FAILED,
              error: Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Wrong Email or Password!",
              }),
            });
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
