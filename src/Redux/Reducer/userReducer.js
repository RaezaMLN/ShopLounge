import * as types from '../Types/userType'

const userState = {
    data: null,
    token: null,
    success: null,
    error:null,
    loading: false,
}


const userReducer = (state = initialUserState, action) =>{

    switch(action.type) {
        case types.USER_REQUEST:
            return Object.assign({}, state,{
                loading: true,
                success: null,
                error: null,
            });
            
        case types.GET_USER_SUCCESS:
            return Object.assign({}, state,{
                loading: false,
                data: action.data,
                success: action.success,
            });

        case types.GET_USER_FAILED:
            return Object.assign({}, state,{
                loading: false,
                success: null,
                error: action.error,
            });

        case types.CLEAN_USER_STATE:
            return Object.assign({}, state,{
                loading: false,
                success: null,
                error: null,
            });

        default:
            return state;
    }
}

export default userReducer