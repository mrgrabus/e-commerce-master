import React from 'react';
import './image-categories.css';
import {Link} from 'react-router-dom';
import SuitManImage from '../../../assets/images/suit-man.jpg';
import SuitWomen from '../../../assets/images/women-category-image.webp';
import { useSpring, animated } from 'react-spring'





const ImageCategories = (props)  =>{
    const style = {
        man : {
            backgroundImage: `url(${SuitManImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        },
        woman: {
            backgroundImage: `url(${SuitWomen})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }
    }
    const animation = useSpring({
        to: async (next, cancel) => {
          await next({opacity: 1})
        },
        from: {opacity: 0},
        config: {duration: 2000 }
        

      })

       return(
            <animated.div style={animation} className='image-categories-container'>
                <Link to='/category/1'>
                    <div className='man-image-container' style={style.man}></div>
                </Link>

                <Link to='/category/2'>
                    <div className='woman-image-container' style={style.woman}></div>
                </Link>
            </animated.div>
    

       )
       

}

export default ImageCategories;