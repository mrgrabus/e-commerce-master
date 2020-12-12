import React, { Component } from 'react';
import SingleProductPageFunc from '../../components/single-product-page/SingleProductPage';
import Axios from 'axios';
import './single-product-container.css';




class SingleProductPage extends Component {
    
    state = {
        showCart : false,
        product : {},
        success: false,
        successError: false
    }
    
    componentDidMount(){

        Axios.get(`https://e-commerce-imel.herokuapp.com/api/product/${this.props.match.params.id}`)
            .then(response =>{
                this.setState({
                    product : response.data,
                    
                })

            })
            .catch(error =>{
                console.log(error)
            })
            
            
    
    
        }


    
    
    addToCart = (id) =>{  
    Axios.post('https://e-commerce-imel.herokuapp.com/api/add-cart', {}, {
        headers: {
          'Content-Type': 'text/plain'
        },
        params: {productId : this.props.match.params.id}
      })
       .then(response =>{
           this.setState({
               success: true
           })
       })
       .catch(error =>{
        this.setState({
            successError: true
        })
       })

    }
    
    
    toggleCart = () =>{
        this.setState({
            showCart : !this.state.showCart
        })
        
   }
   hideCart = () =>{
       this.setState({
           showCart : false
       })
   }
   hideBox = () =>{
       this.setState({
            success: false,
            successError : false
       })
   }
    
    render(){
        return(
            <div className='single-container-product'>
                
                <SingleProductPageFunc 
                    data={this.state.product}
                    showCart={this.state.showCart}
                    addToCart={this.addToCart}
                    hideCart={this.hideCart}
                    toggleCart={this.toggleCart}
                    param={this.props.match.params.id}
                    success={this.state.success}
                    hideBox={this.hideBox}
                    successError={this.state.successError}/>  
                
            </div>
        )
    }
}

export default SingleProductPage;