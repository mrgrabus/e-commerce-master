import Axios from 'axios';
import React, { Component } from 'react';
import RelatedFunc from '../../components/single-product-page/related/Related';

class RelatedContainer extends Component {

    state ={
        relatedItems: [],
        relatedId: null
        
    }
    
   
    componentDidMount(){
        Axios.get(`http://e-commerce-imel.herokuapp.com/api/related/1`)
            .then(response =>{
                this.setState({
                    relatedItems : response.data
                })
            })
            .catch(error =>{
                console.log(error)
            })
            
    }


    render() {
        return (
            <div>
                <RelatedFunc data={this.state.relatedItems}/>
            </div>
        );
    }
}


export default RelatedContainer;