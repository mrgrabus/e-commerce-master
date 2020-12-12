import Axios from 'axios';
import React, { Component } from 'react';
import './product-images.css';

class ProductImages extends Component{
    
    
    state = {
        imagePath: this.props.data[0].mainImage,
        activeClass: 'small-image',
        images: []
    }
    
   setImage = (id) =>{
 
  const updatedImages = [...this.state.images];
    updatedImages.forEach(elem =>{
        
            elem.clicked = 0
            if(elem.id === id){
            elem.clicked = 1
        }
        
        
    })
    this.state.images.forEach((photo)=>{
           if(photo.id === id){
               this.setState({
                   imagePath : photo.path
                   
               })
            }
    })
   }

componentDidMount(){
    Axios.get(`https://e-commerce-imel.herokuapp.com/api/images/${this.props.param}`)
        .then(response =>{
            this.setState({
                images: response.data
                
            })
        })
        .catch(error =>{
            console.log(error)
        })
        
}
   
  
    
    render(){


    
    

        return ( 
      
            <div className='product-images-container'>

                    <div className='main-image-div'>
                    {/* {mainImage} */}
                    <img src={this.state.imagePath} className='main-image' alt=""/>
                    
                </div>

                
                <div className='small-images'>
                    {this.state.images.map((photo) => {
                        return (
                            <div key={photo.id} className='small-image-div'>

                                    <img 
                                        className={photo.clicked === 1 ? 'small-image active' : 'small-image'}
                                        src={photo.path}
                                        onClick={() => this.setImage(photo.id)}
                                        alt=""  />
                            </div>
                        );
                    })}
                    
                </div>
               
    
               
            </div>
         );
    }
    
    
}
 
export default ProductImages;


