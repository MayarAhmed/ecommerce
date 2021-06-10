import React, { Component } from 'react'
import Aux from '../../../../hoc/Auxilairy'
import {
Navbar,
NavDropdown,
Col,
Row,
Image,
FormControl,
Button,
InputGroup} from 'react-bootstrap'
import { connect } from 'react-redux'
import * as types from '../../../../store/types/productInfo'
class Cart extends Component {
   increaseItem= (id,q)=>{
       
     this.props.onIncreament(id,q)
   

   }
    render() {
    let cartItem = <NavDropdown.Item> Add Items to Cart </NavDropdown.Item> 
         console.log(this.props.main)
    let cartDataArr = Array.from(this.props.cartArr);
     if(this.props.cartArr.lenght != 0){
          cartItem = cartDataArr.map((cartItem,i)=>{
             return(
                  
           <div className="container row">
           {/* cart image */}
            <div className="col-md-6">
            <img src={cartItem.image} style={{maxWidth:'100%'}}/>
            </div>
            <div className="col-md-6" style={{overFlow:'hidden'}}>
            <p>{cartItem.title}</p>
            <div className="row" style={{overflow:'hidden'}}>
           <p className="col-md-3"> {cartItem.price} </p>
            <div className="col-md-6">
            <div className="row">
           
            <Button
            variant="outline-secondary" 
            >
            -
            </Button>
            <input
            type="number"
            style={{textAlign:'center'}}
            name="quantity"
            min={1}
            />
             <Button 
             onClick={()=> this.increaseItem(cartItem.id,cartItem.quantity)}
             variant="outline-secondary" 
             >
            +
            </Button>
            </div>
            </div>
            </div>
            </div>
           </div>
             )
         })
     }
        return (
         <Aux>
              <NavDropdown title="Cart" id="navbarScrollingDropdown">
                  {cartItem}
                </NavDropdown>
        </Aux>
        )
    }
}


const mapStateToProps = state => {
    return {

        cartArr: state.productRedeucer.cart,
        main: state.productRedeucer
        
    }
};

const mapDispatchToProps = (dispatch)=>({
        onIncreament:(id,q) => dispatch({type: types.INCREAMENT,increasedItemId:id,q:q})

})


export default connect(mapStateToProps,mapDispatchToProps)(Cart)
