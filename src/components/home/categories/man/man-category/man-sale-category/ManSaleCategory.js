import React from 'react';
import './man-sale-category.css';
import ManSaleImage from '../../../../../../assets/images/man-sale.jpg';
import {useSpring, animated} from 'react-spring';

const  ManSaleCategory = (props) =>{

    const style = {
        textStyle: {
            position: 'absolute',
            top: '100%',
            fontWeight: 'bold',
            color: '#000000',
            spanColor: {
                color: 'red',
                fontWeight: 'bold'
            }
        }
    }

    const animation = useSpring({
        to: async (next, cancel) => {
          await next({opacity: 1})
        },
        from: {opacity: 0},
        config: {duration: 2200 }
        

      })

    return (
        <div>
        <animated.div style={animation} className='man-sale-container' >
            <div style={{backgroundImage: `url(${ManSaleImage})`, backgroundSize: '100% 100%', height: '100%' , width:'100%'}}>
            </div>
            <p style={style.textStyle}><span style={style.textStyle.spanColor}>Sale</span> (Men)</p>
        </animated.div>
        
        </div>
    );
}

export default ManSaleCategory;
