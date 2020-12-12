import React from 'react';
import './grey-button.css';

const GreyButton = (props) =>{
    return (
            <button 
                className='grey-button' 
                onClick={props.buttonClick} 
                type={props.btnType} 
                style={props.style}
                id={props.buttonId}>
                    {props.name}
            </button>
    );
}

export default GreyButton;