import React from 'react';
import './cart-item.css';

const CartItem = (props) =>{
    return (
        <div className='cart-item-container'>
                <div className='cart-image-container'>
                    <img className='cart-item-image' alt='' src={props.image}/>
                </div>
            
                <div className='item-name-price'>
                    <p>{props.name}</p>
                    <p>${props.price}</p>
                </div>
        </div>
    );
}

export default CartItem;