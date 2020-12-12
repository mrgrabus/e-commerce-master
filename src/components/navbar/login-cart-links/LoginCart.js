import React from 'react';
import './login-cart.css'

const LoginCart = (props) => {
    return (
        <div className='login-cart-container'>
                <li>Contact</li>
                <li>Sign in</li>
                <li onClick={props.toggleCart}>Cart</li>
        </div>
    );
};

export default LoginCart;



