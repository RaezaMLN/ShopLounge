import * as type from "../Types/productType";

import { mainApi as api } from "../../Lib/Api";

export const getProduct = () => {
  return async (dispatch) => {
    dispatch({ type: type.PRODUCT_REQUEST });
    api
      .get("/products")
      .then((response) => {
        dispatch({ type: type.GET_PRODUCT_SUCCESS, listProduct: response.data });
      })
      .catch((err) => {
        dispatch({ type: type.GET_PRODUCT_FAILED, error: err.response });
      });
  };
};

export const getDetailProduct = (id, detail) => {
  return async (dispatch) => {
    dispatch({ type: type.PRODUCT_REQUEST });
    api
      .get(`/products/${id}`)
      .then((response) => {
        const detail = response.data;
        console.log("response data", detail);
        return detail;
      })
      .catch((err) => {
        dispatch({ type: type.GET_PRODUCT_FAILED, error: err.response });
      });
  };
};
