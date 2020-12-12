import React, {useState} from 'react';
import './category-page.css';
import ProductCard from './product-card/ProductCard';
import styled from "styled-components";
import {Link} from 'react-router-dom';




const CategoryPage = (props) =>{
    


       let productCard = (
            props.data.map(product => {

                return (
                <ProductMenuItem key={product.id}>
                    <Link to={`/product/${product.id}`} style={{textDecoration: 'none'}}>
                        <ProductCard  
                            name={product.name} 
                            productImage={product.mainImage} 
                            price={product.price}/>
                    </Link> 
                </ProductMenuItem>
            )})
            
        )
    return (
        <div className='category-page-container'>
                
                <h1 className='category-headline'>{(parseInt(props.params, 10)) === 1 ? 'Men' : 'Women'}</h1>
                
                <div className='product-cards-container'>
                    {productCard}
                    
                </div>

        
        
        
        </div>
    );
}
const ProductMenuItem = styled.div`
    transition: all 0.3s ease;
    &:hover{
       transform: scale(1.2, 1.2)
        
      
    }
    


    &:nth-child(2n+2) {
        margin-top: 30%;
    }
    @media (min-width: 1660px){
        text-align: center;
        padding: 0;
        margin: 0;
    }
    @media (max-width: 768px){
        &:nth-child(2n+2) {
            margin-top: 30%;
        }
    }
    @media (max-width: 600px){
        &:nth-child(2n+2) {
            margin-top: 0;
        }
        width: 90%;
    }
    @media (max-width: 414px){
        &:nth-child(2n+2) {
            margin-top: 0;
        }
    }
    
`;

export default CategoryPage;