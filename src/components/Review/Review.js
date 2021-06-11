import React, { Component } from 'react'
import { connect } from 'react-redux'
import Aux from '../../hoc/Auxilairy'
import * as types from '../../store/types/productInfo'
import {Button} from 'react-bootstrap'
import { Link } from "react-router-dom"
import Header from '../Home/Header/Header'
class Review extends Component {

      increaseItem= (id,q)=>{
     this.props.onIncreament(id,q)
   }

   decreaseItem= (id,q) =>{
     this.props.onDecreasment(id,q)
   }


    render() {
        console.log(this.props.reviewArr)
        
        const reviewItemsArr = this.props.reviewArr;
        const reviewItems = reviewItemsArr.map(item=>{

            return(
            <>
                <div className="col-md-6">
                <img src={item.image} style={{maxWidth:'100%',height:'250px'}}/>
                </div>
                 <div className="col-md-6" style={{fontSize:'30px',fontWeight:'bold'}}>
                  <div className="row" style={{justifyContent:'space-around',alignItems:'center'}}>
                  <div className="col-md-6">
                   <p style={{fontWeight:'normal',fontSize:'20px'}}>{item.title}</p>
                 <p>Price : {item.price}</p>
                 <p>Quantity :{item.quantity}</p>
                  </div>
                  <div className="col-md-6">
        <div className="row" style={{justifyContent:'space-around'}}>

            <Button variant="danger"
             onClick={()=> this.decreaseItem(item.id,item.quantity)}> - </Button>
           <p style={{fontWeight:'bold',fontSize:'20px'}}> {item.quantity} </p>
             <Button 
                    onClick={()=> this.increaseItem(item.id,item.quantity)}
                   variant="success">
                    +
            </Button>
            </div>
            </div>
        </div>
                </div>
            </>
            )
        })
        return (
            <Aux >
            <Header/>
                <div className="row m-auto p-3">
                {reviewItems}
                <div className="m-auto p-5">
                <Link to="/orderNow" style={{textDecoration:'none'}}>
                  <Button 
                  variant="primary" className="m-auto">
                  Order Now</Button>
                   </Link> 
                   </div>
                </div>

            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {

        reviewArr: state.productRedeucer.cart,
        
    }
};

const mapDispatchToProps = (dispatch)=>({
        onIncreament:(id,q) => dispatch({type: types.INCREAMENT,increasedItemId:id,q:q}),
        onDecreasment:(id,q) => dispatch({type: types.DECREASE,decreasedItemId:id,quantity:q})

})
 export default connect(mapStateToProps,mapDispatchToProps)(Review)

