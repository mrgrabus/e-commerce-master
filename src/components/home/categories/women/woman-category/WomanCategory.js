import React from 'react';
import './woman-category.css';
import WomanSale from './woman-sale/WomanSale'
import WomenImage from '../../../../../assets/images/women-category-image.webp'
import {useSpring, animated} from 'react-spring';

const WomanCategory = (props) =>{
    
    
    const style = {
        backgroundImage: `url(${WomenImage})`,
        backgroundSize: '100%',
        textStyle: {
            float: 'left', 
            fontSize: '17px', 
            fontWeight: 'normal',
            color: '#000000'
        }
    }
    const propss = useSpring({
        to: async (next, cancel) => {
          await next({opacity: 1})
        },
        from: {opacity: 0},
        config: {duration: 1500 }
        

      })
    
    
    return (
        <div className='woman-category-container'>
            <animated.div style={propss} className='image-container'>
                <div style={{backgroundImage: `url(${WomenImage})`,
                    backgroundSize: 'cover', height: '90%', width:'100%'}} id='image-container'>
                    
                </div>
                <p style={style.textStyle}>Women</p>
                
            </animated.div>
            <WomanSale />
        </div>
    );
}

export default WomanCategory;