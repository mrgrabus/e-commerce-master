import React from 'react';
import './category-link.css';
import {Link} from 'react-router-dom';
import NavbarLink from '../../../UI/navbar-links/NavbarLink';

const CategoryLinks = () => {
    const style={
        textDecoration: 'none'
    }

    const reloadPage = () =>{
        setTimeout(() =>{window.location.reload()}, 100)
        
    }

    return (
        <div className='category-links-container'>
            <Link to='/category/2' style={style}> 
                <NavbarLink name={'Women'} clicked={reloadPage}/> 
            </Link>

            <Link to='/category/1' style={style}> 
                <NavbarLink name={'Men'} clicked={reloadPage}/>
            </Link>

            <Link to='/sale' style={style}>
                <NavbarLink name={'Sale'} elementId={'sale'} />
            </Link>
                
        </div>
    );
};

export default CategoryLinks;