import React, { Component } from 'react';
import './checkout-page.css';
import ContactPayment from './contact-payment/ContacktPayment';
import PaymentCart from './cart/PaymentCart';




class CheckoutPage extends Component {
    render() {
        return (
            <div className='checkout-page-container'>
                
                <ContactPayment />
                <div className='checkout-cont'>
                    <PaymentCart />
                </div>
                
            </div>
        );
    }
}






export default CheckoutPage;