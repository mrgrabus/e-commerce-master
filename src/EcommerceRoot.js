import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Footer from './components/footer/Footer'
import CategoryContainer from './containers/category-container/CategoryContainer';
import SingleProductPage from './containers/single-product-page/SingleProductPage';
import CheckoutPage from './containers/checkout-page/CheckoutPage';





const EcommerceRoot = () => {
    
   
    
    
    
    
    
    return (
        <div>
            
                <Switch >
                    <Route path='/' exact component={Home}/>
                    <Route path='/category/:id' component={CategoryContainer}/>
                    <Route path='/product/:id' component={SingleProductPage} />
                    <Route path='/checkout' component={CheckoutPage} />
                </Switch>
            <Footer />
        </div>
    );
};

export default EcommerceRoot;