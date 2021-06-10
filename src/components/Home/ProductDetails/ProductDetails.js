import React, { Component } from 'react'
import Aux from '../../../hoc/Auxilairy'
import { connect } from 'react-redux'
import {CardGroup, Card, Col, Button } from 'react-bootstrap'
import { productRequest} from '../../../store/actions';
import * as types from '../../../store/types/productInfo';
import './ProductDetails'
import { Link} from "react-router-dom"

 class ProductDetails extends Component {
     constructor(props){
         super(props)
     }

     componentDidMount(){
      this.props.onFetchProducts()
     }
    showDescHandler = (id) =>{
    // this.props.reviewItem(id)
      
     }

     addToCart = (id)=>{
       this.props.addItemToCart(id)
     }

    render() {
    let check = "Loading!!!!"
        if(this.props.product.lenght !== 0){
    let renderedData = Array.from(this.props.product.data);
    const objQ = {quantity:1}
    console.log('666',this.props.product.data)
      check = renderedData.map(item=>{
          return(
            <div key ={item.id}  className="col-lg-4 d-flex align-items-stretch">
                <Card className="mb-3 pb-3" style={{justifyContent:'flex-end',alignItems:'center'}}>
            <Link to={`/products/${item.id}`} style={{textAlign:'center',textDecoration:'none'}}>
                    <Card.Img 
                    style={{maxWidth:'100px'}}
                    variant="top" src={item.image} />
                    <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>
                    </Link>

                    <Button 
                    onClick={()=> this.addToCart(item.id)}
                    variant="success" >Add To Cart</Button>{' '}
                </Card>
          
  </div>

          )
      }
             

        )
    
    }
    console.log('check',this.props.product)

         return (
        <Aux>
<CardGroup className ="container-fluid content-row row"  style={{paddingTop:'10px'}}>
    {check}
  </CardGroup>
        </Aux>
         )
    }
}


const mapStateToProps = state => {
    return {

        product: state.productRedeucer,
        
    }
};

const mapDispatchToProps = (dispatch)=>({
     onFetchProducts:()=> dispatch(productRequest()),
        reviewItem:(id) => dispatch({type: types.REVIEW_ITEM, productId: id}),
    addItemToCart:(id) => dispatch({type:types.ADD_TO_CART, cartItemId:id})
})








export default connect(mapStateToProps,mapDispatchToProps)(ProductDetails)
