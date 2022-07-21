import { combineReducers } from "redux";

import cartReducer from "./Reducer/cartReducer";
import productReducer from "./Reducer/productReducer";
import userReducer from "./Reducer/userReducer";

const rootReducers = combineReducers({
  cart: cartReducer,
  user: userReducer,
  product: productReducer,
});

console.log("see cart", rootReducers.cart);

//export its as default
export default rootReducers;
