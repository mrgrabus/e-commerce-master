import React from 'react';
import './logo.css';
import {Link} from 'react-router-dom';
import LogoImage from '../../../assets/images/logo.png';
const Logo = () => {
    
    
    
    
    return (
        <div className='logo-container'>
            <Link to='/'>
                <img src={LogoImage} className='logo-image' alt='logo'/>
            </Link>
        </div>
    );
};

export default Logo;