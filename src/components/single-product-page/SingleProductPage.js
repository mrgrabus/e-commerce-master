import React from 'react';
import './single-product-page.css';
import ProductDesription from './product-description/ProductDesription';
import ProductImages from './product-images/ProductImages';
import Related from '../../containers/related-container/RelatedContainer';
import Navbar from '../../components/navbar/Navbar';


const SingleProductPage = (props) => {
    
 let productData;
 if(props.data.length > 0 ){
     productData = (
         <div className='image-description-container'>
            <ProductImages data={props.data} param={props.param}/>
            <ProductDesription 
                addToCart={props.addToCart}
                showCart={props.showCart}
                hideCart={props.hideCart}
                data={props.data}
                toggleCart={props.toggleCart}
                success={props.success}
                hideBox={props.hideBox}
                successError={props.successError}

                />
            </div>
     )
 }
    
    
    
    return ( 
        <div className='single-product-container'>
                    <Navbar />
                    {productData}
            
            <div className='single-related-container'>
                <Related />
            </div>


            
           


        </div>
     );
}
 
export default SingleProductPage;