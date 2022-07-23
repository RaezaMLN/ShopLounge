import * as types from "../Types/cartType";

const cartState = {
  //   numberCart: 0,
  // cart: [],
  cartProducts: [],
};

const cartReducer = (state = cartState, { type, payload }) => {
  // console.log("see payload", payload)
  switch (type) {
    case types.ADD_CART:
      return Object.assign({}, state, {
        cartProducts: [...state.cartProducts, payload],
      });
    case types.DELETE_CART:
      return Object.assign({}, state, {
        cartProducts: state.cartProducts.filter((item) => item.id !== payload.id),
      });
    // case types.ADJUST_QUANTITY:
    //     return{

    //     }
    default:
      return state;
  }
};

export default cartReducer;
