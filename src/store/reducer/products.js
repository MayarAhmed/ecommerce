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
             return  {
                ...state,
             cart: state.cart.concat(obj3)
             }
          
           case types.INCREAMENT:
           const cartCopied = [...state.cart]
          const increaseQuantityObj = state.data.filter(incObj => incObj.id == action.increasedItemId )
           const itemInc ={...increaseQuantityObj}
           let incCartCopied =itemInc[0].quantity + 1
             let inc = cartCopied.map(i=>{
                 if(i.id == action.increasedItemId){
                   return  i.quantity = incCartCopied
                 }
             })
        return{
            ...state,
            cart:cartCopied
        }

            case types.DECREASE:
           const cartCopiedDecrease = [...state.cart]
          const decreseQuantityObj = state.data.filter(decObj => decObj.id == action.decreasedItemId )
           const itemDec ={...decreseQuantityObj}
           let decCartCopied =itemDec[0].quantity - 1
             let decrease = cartCopiedDecrease.map(i=>{
                 if(i.id == action.decreasedItemId && i.quantity >= 1 ){
                   return  i.quantity = decCartCopied
                 }
             })
        return{
            ...state,
            cart:cartCopiedDecrease
        }
          default:
         return state;
    }
}


