import React, { Component } from 'react'
import { connect } from 'react-redux'
import Aux from "../../hoc/Auxilairy"
import Header from '../Home/Header/Header'
import  './ProductDesc'
class ProductDesc extends Component {
    render() {

        const queryParamId  = this.props.match.params.id
        const productsData = Array.from(this.props.desc.data) 
       const products = productsData.filter(pro => pro.id == queryParamId )
       console.log(products)

        let reviewProduct = products.map(item=>{
            return(
                <div
                 className = "container row" 
                key={item.id}>
                <div className="col-md-6">
            <img src ={item.image} style={{maxWidth:'100%'}}/>
                </div>
                <div className="col-md-6" style={{padding:'60px',fontWeight:'bold',fontSize: '25px'}}>
                 <p><span style={{color:'red',paddingRight:'10px'}}>Caregory:</span>{item.category}</p>
                  <p>{item.title}</p>
                  <p>{item.price}</p>
                <p>{item.description}</p>

                </div>
                </div>
            )
        })

        return (
            <Aux>
                <Header />
{reviewProduct}
            </Aux>
        )
    }
}
const mapStateToProps = state => {
    return {

        desc: state.productRedeucer,

        
    }
};
export default connect(mapStateToProps)(ProductDesc)
