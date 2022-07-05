// import * as type from '../Types/productType'

// import {mainApi as api} from '../../Lib/Api'


// export const actFetchProductsRequest = () => {
//     return async(dispatch) => {
//         api.get("/products").then((response)=>{
//             dispatch(GetAllProduct(response.data));
//         })
//     }
// }

// /*GET_ALL_PRODUCT*/
// export function GetAllProduct(payload){
//     console.log("see payload", payload)
//     return{
//         type:'GET_ALL_PRODUCT',
//         payload
//     }
// }

// /*GET NUMBER CART*/
// export function GetNumberCart(){
//     return{
//         type:'GET_NUMBER_CART'
//     }
// }

// export function AddCart(payload){
//     return {
//         type:'ADD_CART',
//         payload
//     }
// }
// export function UpdateCart(payload){
//     return {
//         type:'UPDATE_CART',
//         payload
//     }
// }
// export function DeleteCart(payload){
//     return{
//         type:'DELETE_CART',
//         payload
//     }
// }

// export function IncreaseQuantity(payload){
//     return{
//         type:'INCREASE_QUANTITY',
//         payload
//     }
// }
// export function DecreaseQuantity(payload){
//     return{
//         type:'DECREASE_QUANTITY',
//         payload
//     }
// }