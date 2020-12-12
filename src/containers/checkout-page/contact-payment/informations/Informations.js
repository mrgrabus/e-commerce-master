import React, { Component } from 'react';
import './informations.css';
import Input from '../../../../UI/input/Input';
import PaymentButton from '../../../../UI/grey-button/GreyButton';
import Axios from 'axios';
import PaymentMethod from './payment-method/PaymentMethod';
import Logo from '../../../../assets/images/logo.png';
import {Link} from 'react-router-dom'


class Informations extends Component {
    
    state = {
        formGroup: {
            email : {
                elementType: 'input',
                elementConfig:{
                    type: 'email',
                    placeholder: 'Email',
                    id: 'email'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            firstName : {
                elementType: 'input',
                elementConfig:{
                    type: 'text',
                    placeholder: 'First Name',
                    id: 'first-name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            lastName : {
                elementType: 'input',
                elementConfig:{
                    type: 'text',
                    placeholder: 'Last Name',
                    id: 'last-name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            company : {
                elementType: 'input',
                elementConfig:{
                    type: 'text',
                    placeholder: 'Company Name (optional)',
                    id: 'company'
                },
                value: '',
                validation: {
                    required: false
                },
                valid: false
            },
            address : {
                elementType: 'input',
                elementConfig:{
                    type: 'text',
                    placeholder: 'Address',
                    id: 'adress'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            appartment : {
                elementType: 'input',
                elementConfig:{
                    type: 'text',
                    placeholder: 'Appartment, suite, etc (optional)',
                    id: 'appartment'
                },
                value: '',
                validation: {
                    required: false
                },
                valid: false
            },
            postalCode : {
                elementType: 'input',
                elementConfig:{
                    type: 'text',
                    placeholder: 'Postal code',
                    id: 'postal-code'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            city : {
                elementType: 'input',
                elementConfig:{
                    type: 'text',
                    placeholder: 'City',
                    id: 'city'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            country : {
                elementType: 'input',
                elementConfig:{
                    type: 'text',
                    placeholder: 'Country/Region',
                    id: 'country'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            phone : {
                elementType: 'input',
                elementConfig:{
                    type: 'text',
                    placeholder: 'Phone (optional)',
                    id: 'phone'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            }

        },
        contactData : [],
        cartProducts: [],
        showPayment: false,
        showConfirm: false,
        submitError : false
}

    componentDidMount(){
        Axios.get('https://e-commerce-imel.herokuapp.com/api/get-cart')
        .then(response =>{
            this.setState({
                    cartProducts: response.data
            })
        })
        .catch(error =>{
            console.log(error)
        })
    }
    checkValidity(value, rules){
        let isValid = false;

        if(rules.required){

            isValid = value.trim() !== '';
        }
        

        return isValid;
    }
    checkSubmitValid = () =>{
        let submitValid = false
        for(let formKey in this.state.formGroup){
            if(this.state.formGroup[formKey].valid){
                submitValid = true
            }else{
                submitValid = false
            }
        }
    return submitValid;
    
    }
    changeHandler = (e, id) =>{

        let updatedForm = {...this.state.formGroup};
        let updatedElement = updatedForm[id];
        updatedElement.value = e.target.value
        updatedElement.valid =  this.checkValidity(updatedElement.value, updatedElement.validation)
        this.setState({
            formGroup : updatedForm
        })
        
        let formData = {};
                for(let formElement in this.state.formGroup){
                    formData[formElement] = this.state.formGroup[formElement].value
                    this.setState({
                            contactData: formData
                    })
    
                }
    }

    submitForm = (e) =>{
        e.preventDefault();
        const submitValid = this.checkSubmitValid();
        if(submitValid){
            this.setState({
                showPayment : true
            })
        }else{
            this.setState({
                submitError : true
            })
        }

    }
    setConfirm = () =>{
        this.setState({
            showConfirm : true
        })
    }
    setError = () =>{
        this.setState({
            submitError : false
        })
    }
    

    render(){
       let formArray = [];
       for(let key in this.state.formGroup){
        formArray.push({
            id: key,
            config: this.state.formGroup[key]
        })
        
       }

        let form = (
            formArray.map(elem =>(
                   <Input 
                    key={elem.id}
                    elementType={elem.config.elementType}
                    config={elem.config.elementConfig}
                    value={elem.config.value}
                    changeHandler={(event) => this.changeHandler(event, elem.id)}/>
            ))
       )
       
       const buttonStyle = {
            position: 'absolute',
            right: '-1%',
            marginTop: '10px'
       }
       let submitError;
        if(this.state.submitError){
            submitError =(<p className='submitError'>Please fill out required fields <span onClick={() => this.setError()}> X</span></p>)
        }
        return (
            <div className='informations-container'>
                <div className='checkout-nav'>
                    <Link to='/'>
                        <img src={Logo} className='info-logo'/>
                    </Link>
                        <div className='check-item-div'>
                            <p className={!this.state.showPayment ? 'check-item' : 'check-item inactive'}>Information </p><span className='arrow'>{'>'}</span>
                            <p className={this.state.showPayment ? 'check-item' : 'check-item inactive'}>Payment</p><span className='arrow'>{'>'}</span>
                            <p className={this.state.showConfirm ? 'check-item' : 'check-item inactive'}>Confirm</p>
                        </div>
                    
                </div>
                
                
                <form onSubmit={this.submitForm} className={this.state.showPayment ? 'hide' : null}>
                    <div>
                        <p className='info-text'>Contact information</p>
                    </div>



                    <div className='info-text-container'>
                        <p className='info-text'>Shipping </p>
                        {form}
                        
                    </div>
                    <PaymentButton name='Continue to payment' btnType='submit' style={buttonStyle} buttonId='informationButton'/>
                    {submitError}
                </form>
                
                {this.state.showPayment ? 
                    <PaymentMethod 
                        contactData={this.state.contactData}
                        cartProducts={this.state.cartProducts}
                        setConfirm={this.setConfirm}
                        showConfirm={this.state.showConfirm}/>
                : null}

            </div>
        );
    }
    
    
    
}

export default Informations;