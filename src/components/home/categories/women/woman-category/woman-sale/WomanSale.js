import React from 'react';
import './woman-sale.css';
import WomenSaleImage from '../../../../../../assets/images/women-sale.jpg';
import {useSpring, animated} from 'react-spring';

const WomanSale = (props) =>{
    
    const style = {
        backgroundImage: `url(${WomenSaleImage})`,
        backgroundSize: '100% 100%',
        textStyle: {
            position: 'absolute',
            top: '100%',
            fontWeight: 'bold',
            color: '#000000',
            spanColor: {
                color: 'red',
                fontWeight: 'bold',
                
            }
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
        <div>
         <animated.div style={animation} className='woman-sale-container' >
            <div style={{backgroundImage: `url(${WomenSaleImage})`, backgroundSize: '100% 100%', height: '100%' , width:'100%'}}>
            </div>
            <p style={style.textStyle}><span style={style.textStyle.spanColor}>Sale</span> (Women)</p>
        </animated.div>
        
        
        </div>
    );
}

export default WomanSale;