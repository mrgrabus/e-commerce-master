import React, { Component } from 'react';
import './payment-method.css';
import Confirm from './confirm/Confirm';
import GreyButton from '../../../../../UI/grey-button/GreyButton';


class PaymentMethod extends Component{
    
    state={
        showConfirm : this.props.showConfirm,
        paymentMethods: [
            {id: 1, name: 'PayPall', image: '/assets/logo/paypall.png', active: false},
            {id: 2, name: 'Stripe', image: '/assets/logo/stripe.jpg', active: false},
            {id: 3, name: 'ApplePay', image: '/assets/logo/applepay.png', active: false},
            {id: 4, name: 'Klarna', image: '/assets/logo/klarna.png', active: false}
        ],
        paymentMethod: '',
        showCart : false
    }
    
    
    
    setMethod = (id) =>{
        let methodUpdated = [...this.state.paymentMethods];
        methodUpdated.map(elem =>{
                elem.active = false
                if(elem.id == id){
                    this.setState({
                        paymentMethod: elem.name
                    })
                    elem.active = true
                }
        })
        this.setState({
            paymentMethods : methodUpdated,
        })
        
    }
    
    showCart = () =>{
        this.setState({
            showCart :  true
        })
    }
    
    
    
    
    render(){
        
        const style = {
            float : 'right',
            marginTop: '30px'
        }

        return (
            <div className='payment-container'>
                <p>Payment provider</p>
            <div className='payment-method-container'>
                <div>
                    <div className={!this.props.showConfirm ? 'payment-methods' : 'hide'}>
                        {this.state.paymentMethods.map(elem =>(
                            <div className={elem.active ? 'method active-method' : 'method'} key={elem.id} alt="">
                                <img 
                                    src={elem.image} 
                                    className="method-image"
                                    onClick={() => this.setMethod(elem.id)}
                                    id={elem.name}/>
                            </div>
                        ))}
                         <div onClick={this.showCart}>
                            <GreyButton 
                                name='Continue to Confirm'
                                buttonClick={this.props.setConfirm}
                                buttonId='continue'
                                style={style}/>
                                
                        </div>
                        
                    </div>
                   
                    
                </div>
               
                </div>

                {this.props.showConfirm ? 
                    <Confirm 
                        contactData={this.props.contactData} 
                        cartProducts={this.props.cartProducts}
                        paymentMethod={this.state.paymentMethod}
                        showCart={this.state.showCart}
                        /> 
                       
                : null}
            </div>
            
    );}
    


}

export default PaymentMethod;