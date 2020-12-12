import React, { Component } from 'react';
import './confirm.css';
import OrderButton from '../../../../../../UI/grey-button/GreyButton';
import Axios from 'axios';
import Cart from '../../../../cart/PaymentCart';

class Confirm extends Component {
    
    
    state = {
        orderComplete : false
    }
    
    completeOrder = () =>{
        Axios.get(`https://e-commerce-imel.herokuapp.com/api/delete`)
        .then(response =>{
            console.log(response.status)

        })
        .catch(error =>{
            console.log(error)
        })
    

        this.setState({
            orderComplete : true
        })
    
    }
    render() {
        const style = {
            float: 'right',
            cartStyle : {
              marginLeft: '-20px'
            }
        }
        return (
            <div className='confirm-container'>
                <div className={!this.state.orderComplete ? 'informations' : 'hide'}>
                    <p className='confirm'>Confirm</p>
                    <p className='confirm-email'>{this.props.contactData.email}</p>
                    <p className='confirm-first-last-name'>{this.props.contactData.firstName} {this.props.contactData.lastName}</p>
                    <p className='confirm-adress'>{this.props.contactData.address}</p>
                    <p className='confirm-postal-code-city'>{this.props.contactData.postalCode} {this.props.contactData.city}</p>
                    <p className='confirm-phone'>{this.props.contactData.phone}</p>
                    <p  className='confirm-payment'><span>{this.props.paymentMethod}</span> ({this.props.contactData.email})</p>

                    <div className='cart-container-confirm'>
                        {this.props.showCart ? <Cart cartStyle={style.cartStyle}/> : null}
                    </div>
                        <OrderButton name="Order" style={style} buttonClick={this.completeOrder} buttonId='order-button'/>
                </div>

                <div className={this.state.orderComplete ? 'order-complete' : 'hide'}>
                    <p>Thank you for your order!</p>
                    <p>The order will be processed within next 48 hours.</p>
                </div>
            </div>
        );
    }
}

export default Confirm;