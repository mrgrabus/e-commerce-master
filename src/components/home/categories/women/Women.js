import React from 'react';
import './women.css';
import {Link} from 'react-router-dom';
import WomenCategory from './woman-category/WomanCategory';


const Women = (props) =>{
    return (
        <div className='women-container'>
            <Link to='/category/2' style={{textDecoration: 'none'}}>
                <WomenCategory />
            </Link>      
        </div>
    );
}

export default Women;