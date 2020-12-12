import React from 'react';
import './home.css';
import Categories from './categories/Categories';
import ImageCategories from './image-categories/ImageCategories';
import Navbar from '../navbar/Navbar';

const Home = () => {
    return (
        <div className='home-container'>
            <Navbar/>
            <Categories />
            <ImageCategories />
        </div>
    );
};

export default Home;    