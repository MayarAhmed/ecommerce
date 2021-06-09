import * as types from '../types/productInfo'

    const INITIAL_STATE = {
        data:[],
        products:[]
    };


 export default  (state = INITIAL_STATE, action) =>{

    switch (action.type){
        case types.GET_PRODUCT_RECEIVE:
        return {...state,
                data:action.payload}
        case types.REVIEW_ITEM:
        return{
                ...state,
                products: state.data.filter(pro => pro.id == action.productId)
        }
          default:
         return state;
    }
}


