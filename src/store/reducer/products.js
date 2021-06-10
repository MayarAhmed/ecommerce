import * as types from '../types/productInfo'

    const INITIAL_STATE = {
        data:[],
        products:[],
        cart:[]
    };


 export default  (state = INITIAL_STATE, action) =>{

    switch (action.type){
        case types.GET_PRODUCT_RECEIVE:
        return {...state,
                data:action.payload
                }
        case types.REVIEW_ITEM:
        return{
                ...state,
                products: state.data.filter(pro => pro.id == action.productId)
        }
        case types.ADD_TO_CART:
          const cartItemObj = state.data.filter(item => item.id == action.cartItemId)
            const obj1 ={quantity:1};
            const obj2 =cartItemObj[0] ;
            const obj3 = Object.assign(obj2, obj1);
            console.log('wegz',obj3)
             return  {
                ...state,
             cart: state.cart.concat(obj3)
             }
          
           case types.INCREAMENT:
          const increaseQuantityObj = state.data.filter(qObj => qObj.id == action.increasedItemId )
           const qq = action.increasedItemId
        return{
            ...state,
            q:qq
        }
          default:
         return state;
    }
}


