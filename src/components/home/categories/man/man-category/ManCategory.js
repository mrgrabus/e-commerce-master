import React from 'react';
import './man-category.css';
import ManSaleCategory from './man-sale-category/ManSaleCategory';
import ManCategoryImage from '../../../../../assets/images/man-category.jpg';
import {useSpring, animated} from 'react-spring';

const ManCategory = (props) => {
    
    const style = {
        backgroundImage: `url(${ManCategoryImage})`,
        backgroundSize: '100%',
        textStyle: {
            float: 'right', 
            fontSize: '17px', 
            fontWeight: 'normal',
            color: '#000000'
        }
    }
    
    const animation = useSpring({
        to: async (next, cancel) => {
          await next({opacity: 1})
        },
        from: {opacity: 0},
        config: {duration: 1000 }
        

      })
    
    return (
        <div className='man-category-container'>
            <animated.div style={animation} className='man-category-image'>
                <div style={{backgroundImage: `url(${ManCategoryImage})`,
                    backgroundSize: 'cover', height: '100%', width:'100%'}}>
                </div>
                <p style={style.textStyle}>Men</p>
            </animated.div>
            
            
            <ManSaleCategory />
        </div>
    );
}

export default ManCategory;