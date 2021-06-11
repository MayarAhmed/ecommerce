import React, { Component } from 'react'
import Aux from '../../../../hoc/Auxilairy'
import { Link } from "react-router-dom"

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

   decreaseItem= (id,q) =>{
     this.props.onDecreasment(id,q)
   }
 
    render() {
    let cartItem = <NavDropdown.Item> Add Items to Cart </NavDropdown.Item> 
    let cartDataArr = Array.from(this.props.cartArr);
     if(this.props.cartArr.length !== 0 ){
          cartItem = cartDataArr.map((cartItem,i)=>{
             return(
                  
        <div className="container row mb-3" key={cartItem.id}>
           {/* cart image */}
            <div className="col-md-6">
                  <img src={cartItem.image} style={{maxWidth:'100%'}}/>
            </div>
        {/* Item Cart Info */}
            <div className="col-md-6" style={{overFlow:'hidden'}}>
                <p>{cartItem.title}</p>
                <p> {cartItem.price} </p>
           
        <div className="row" style={{justifyContent:'space-around'}}>
            <Button variant="danger"
             onClick={()=> this.decreaseItem(cartItem.id,cartItem.quantity)}> - </Button>
           <p style={{fontWeight:'bold',fontSize:'20px'}}> {cartItem.quantity} </p>
             <Button 
                    onClick={()=> this.increaseItem(cartItem.id,cartItem.quantity)}
                   variant="success">
                    +
            </Button>
        </div>
     </div>
  </div>
         
             )
         })
     }

        return (
         <Aux>
              <NavDropdown title="Cart" id="navbarScrollingDropdown" style={{width:'20rem'}}>
                  {cartItem}
                  {this.props.cartArr.length !== 0
                  ? <div style={{textAlign:'center'}}>
                   <Link to="/reviewOrder" style={{textDecoration:'none'}}>
                  <Button 
                  variant="primary" className="m-auto">
                  Review Order</Button>
                   </Link> 
                  </div>
                  :null}
                  
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
        onIncreament:(id,q) => dispatch({type: types.INCREAMENT,increasedItemId:id,q:q}),
        onDecreasment:(id,q) => dispatch({type: types.DECREASE,decreasedItemId:id,quantity:q})

})


export default connect(mapStateToProps,mapDispatchToProps)(Cart)
