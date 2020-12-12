import React from 'react';
import './payment-cart.css';
import Cart from '../../cart/Cart';

const PaymentCart = (props) =>{
    const cartStyle = {
        display: 'none',

    }
    
    
    return (
        <div className='payment-cart-container' style={props.cartStyle}>
            <Cart btnStyle={cartStyle} hideCartStyle={cartStyle}/>
        </div>
    );
}

export default PaymentCart;