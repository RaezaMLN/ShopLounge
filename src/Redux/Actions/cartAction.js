import * as types from "../Types/cartType";

// /*GET NUMBER CART*/
// export function GetNumberCart(){
//     return{
//         type: types.GET_NUMBER_CART
//     }
// }

export function AddCart(itemId) {
  return {
    type: types.ADD_CART,
    payload: {
      id: itemId,
    },
  };
}

export function DeleteCart(itemId) {
  return {
    type: types.DELETE_CART,
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
