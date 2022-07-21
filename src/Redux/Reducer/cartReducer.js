import * as types from "../Types/cartType";

const cartState = {
  //   numberCart: 0,
  cart: [],
  //   products: [],
};

const cartReducer = (state = cartState, { type, payload }) => {
  switch (type) {
    case types.ADD_CART:
      return Object.assign({}, state, {
        cart: [...state.cart, payload],
      });
    case types.DELETE_CART:
      return Object.assign({}, state, {
        cart: state.cart.filter((item) => item.id !== payload.id),
      });
    // case types.ADJUST_QUANTITY:
    //     return{

    //     }
    default:
      return state;
  }
};

export default cartReducer;
