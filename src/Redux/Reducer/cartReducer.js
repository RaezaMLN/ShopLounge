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

    case types.DELETE_SINGLE_CART:
      const arr = []
        state.cartProducts.forEach((e,i)=>{
          if (e.id === payload.id){
            arr.push(i)
          }
        })
        return Object.assign({}, state, {
          cartProducts: state.cartProducts.filter((item, index) => index !== arr[arr.length -1] )
        });

    default:
      return state;
  }
};

export default cartReducer;
