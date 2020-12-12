import React, {useState} from 'react';
import './navbar.css';
import CategoryLinks from './category-links/CategoryLinks';
import Logo from './logo/Logo';
import LoginCart from './login-cart-links/LoginCart';
import BurgerMenu from '../../assets/icons/burger-menu.svg';
import Cart from '../../containers/cart/Cart';


const Navbar = () => {
    
    const [toggleClass, setClass] = useState(false)
    const [showCart, setCart] = useState(false)
    
    const changeClasses = () =>{
        setClass(!toggleClass)
    }

    const toggleCart = () =>{
        setCart(!showCart)
    }
    
    const cartStyle = {
        position: 'absolute',
        right: '0',
        zIndex: '5'
    }
    
    
    return (
        <div className='navbar-container'>
            <header className='navbar'>
                <CategoryLinks />
                <Logo />
                <LoginCart toggleCart={toggleCart}/>
            </header>
            
            
            
            
            
            {/*Responsive navbar */}
            <header className='responsive-nav'>
                <div className='responsive-logo-burger'>
                    <Logo />
                    <div className='burger'>
                        <img src={BurgerMenu} onClick={changeClasses} alt='burger'/>
                    </div>
                </div>
               
                <div className={toggleClass ? 'responsive-items nav-open' : 'responsive-items nav-close'}>
                    <CategoryLinks />
                    <LoginCart toggleCart={toggleCart}/>
                </div>
            </header>
            {showCart ? <Cart cartStyle={cartStyle} hideCart={toggleCart}/> : null}
        </div>
    );
};

export default Navbar;
