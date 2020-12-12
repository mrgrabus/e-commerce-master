import React from 'react';
import './input.css';

const Input = (props) =>{
    let inputElement = null;
    const classes = ['inputClass']

    switch(props.elementType){
        case('input'):
            inputElement = 
                <input 
                    {...props.config}
                    className={classes.join(' ')}
                    value={props.value}
                    onChange={props.changeHandler}/>
            break;
        case('textarea'):
            inputElement = 
                <textarea 
                    {...props.config}
                    className={classes.join(' ')}
                    value={props.value}
                    onChange={props.changeHandler}/>
            break;
        default: 
            inputElement = 
                <input 
                    {...props.config}
                    className={classes.join(' ')}
                    value={props.value}
                    onChange={props.changeHandler}/>
    }
    
    
    
    
    
    
    
    
    return (
        <div>
            {inputElement}
        </div>
    );
}

export default Input;