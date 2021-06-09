import React, { Component } from 'react'
import Aux from '../../../hoc/Auxilairy'
import { connect } from 'react-redux'
import {CardGroup, Card, Col, Button } from 'react-bootstrap'
import { productRequest} from '../../../store/actions';
import * as types from '../../../store/types/productInfo';
import styles from './ProductDetails'

 class ProductDetails extends Component {

     componentDidMount(){
      this.props.onFetchProducts()
     }


    render() {
         let check = "he"
        if(this.props.product.lenght !== 0){
    let renderedData = Array.from(this.props.product.data);
    console.log('666',this.props.product.data)
      check = renderedData.map(item=>(
         <Col md={4}
         key ={item.id}>
    <Card 
    style={{alignItems:'center', padding:'10px 2px',flex:1}} >
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
         <Button variant="success"
         onClick={() => this.props.reviewItem(item.id)}>Success</Button>{' '}
    </Card>
</Col>
        )
    )
    }
    console.log('check',this.props.product)

         return (
        <Aux>
<CardGroup style={{paddingTop:'10px',width:'100%'}}>
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
    reviewItem:(id) => dispatch({type: types.REVIEW_ITEM, productId: id})
})








export default connect(mapStateToProps,mapDispatchToProps)(ProductDetails)
