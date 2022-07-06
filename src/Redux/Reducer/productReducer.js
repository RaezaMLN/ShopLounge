import * as types from '../Types/productType'

const productState = {
    list:[],
    loading:false,
    error:null,
}

const productReducer = (state = productState, action) =>{
    switch(action.type) {
        case types.PRODUCT_REQUEST:
            return Object.assign({}, state,{
                loading: true,
                error: null,
            });
        
        case types.GET_PRODUCT_SUCCESS:
        
        return Object.assign({}, state,{
            loading: false,
            list:action.listProduct
        });

        case types.GET_PRODUCT_FAILED:
            return Object.assign({}, state,{
                loading: false,
                error: action.error,
            });

        default:
            return state;
    }
}

export default productReducer