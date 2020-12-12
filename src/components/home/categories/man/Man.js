import React from 'react';
import './man.css';
import {Link} from 'react-router-dom';
import ManCategory from './man-category/ManCategory';

function Man(props) {
    return (
        <div className='man-container'>
            <Link to='/category/1' style={{textDecoration: 'none'}}>
                <ManCategory />
            </Link>
        </div>
    );
}

export default Man;