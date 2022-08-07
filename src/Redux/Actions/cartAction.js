import * as types from "../Types/cartType";

// /*GET NUMBER CART*/
// export function GetNumberCart(){
//     return{
//         type: types.GET_NUMBER_CART
//     }
// }

export const AddCart = (item) => {
  return (dispatch) => {
    // console.log("see item",item)
    dispatch({ type: types.ADD_CART, payload: item });
  };
};

export function DeleteCart(itemId) {
  return {
    type: types.DELETE_CART,
    payload: {
      id: itemId,
    },
  };
}

export function DeleteSingleCart(itemId) {
  return {
    type: types.DELETE_SINGLE_CART,
    payload: {
        id: itemId,
    },
   
  };
}

// export function AdjustQuantity(itemId, value){
//     return{
//         type: types.ADJUST_QUANTITY,
//         payload: {
//             id: itemId,
//             qty: value
//         }
//     }
// }
