import * as types from "../Types/cartType";

const cartState = {
//   numberCart: 0,
    cart: [],
    products:[]
};

const cartReducer = (state = cartState, action) => {
  switch(action.type){

    case types.ADD_CART:
        return{
            
        }
    case types.DELETE_CART:
        return{
            
            
        }
    case types.ADJUST_QUANTITY:
        return{
            
        }
    default:
        return state;
}
};

export default cartReducer;
