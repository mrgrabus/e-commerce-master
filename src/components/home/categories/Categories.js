import React from 'react';
import './categories.css';
import WomenCategory from './women/Women';
import ManCategory from './man/Man';




const Categories = () => {


    return (
        <div className='categories-container'>
            <WomenCategory  />
            <ManCategory />
        </div>
    );
};

export default Categories;