import React, { Component } from 'react';
import './cart.css';
import CheckoutButton from '../../UI/grey-button/GreyButton';
import CartItem from './cart-item/CartItem';
import Axios from 'axios';
import {Link} from 'react-router-dom';



class Cart extends Component {
 
    state={
        products: []
    }
    
    componentDidMount(){
        Axios.get('https://e-commerce-imel.herokuapp.com/api/get-cart')
            .then(response => {
                this.setState({
                    products : response.data
                })
            })
            .catch(error =>{
                console.log(error)
            })
        
    
    }

    render() {

        let subTotal = [];
        const taxes = 81;
        let price;

        return (
            <div className='cart-container' style={this.props.cartStyle}>
                <div className='cart-items-container'>
                    
                    <p>Cart
                        <span onClick={this.props.hideCart} className='hide-cart'>X</span>
                    </p>
                    
                    {this.state.products.map(elem =>{
                        subTotal.push(elem.price)
                        return (
                            <CartItem 
                                key={elem.id} 
                                name={elem.name} 
                                price={elem.price} 
                                image={elem.mainImage}/>
                        )
                       
                        
                    })}
                    
                    
                    <div className='subtotal-taxes'>
                    <p>Subtotal <span>${price = subTotal.reduce((a, b) => a + b, 0)}</span></p>
                        <p>Taxes <span>${this.state.products.length !== 0 ? taxes : 0}</span></p>
                    </div>
                    <div className='total-cont'>
                    <p>Total <span>${this.state.products.length !== 0 ? price + taxes : 0}</span></p>
                    </div>
                    <div className='check-button'>
                    <Link to='/checkout'>
                        <CheckoutButton name='Checkout' />
                    </Link>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Cart;