import React from 'react';
import './product-card.css';
import styled from "styled-components";



const ProductCard = (props) => {
    
    const style ={
        backgroundImage: `url(${props.productImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top'
    }


    return (
        <ProductMenuItem>
        <div className='product-card-container' >

          
                <div className='product-image-container' style={style}> 
                </div>
        
                <div className='product-description-containers'>
                    <p className='product-names'>{props.name}</p>
                    <p className='product-prices'>${props.price}</p>
                </div>
            

        </div>
        </ProductMenuItem>

    );
}
const ProductMenuItem = styled.div`
    transition: all 0.3s ease;
    &:hover{
       
    background: url('/assets/men/product1/image1.jpg') center center no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    z-index: 9999;
    
  
}

`
export default ProductCard;