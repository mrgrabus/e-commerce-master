import React, { Component } from 'react';
import './category-container.css';
import CategoryPage from '../../components/category-page/CategoryPage';
import Axios from 'axios';
import Navbar from '../../components/navbar/Navbar';

class CategoryContainer extends Component {
    
    
    state ={
        data: [],
    }


    componentDidMount(){
        Axios.get(`https://e-commerce-imel.herokuapp.com/api/category/${this.props.match.params.id}`)
            .then(response =>{
                this.setState({
                    data : response.data
                })
            })
            .catch(error =>{
                console.log(error)
            })
        }

    
        render() {
        let categoryPages;
        
        categoryPages = (<CategoryPage data={this.state.data} params={this.props.match.params.id}/>) 
        return (
            <div className='category-statefull-container'>
                <Navbar />
                {categoryPages}
                
            </div>
        );
    }
}

export default CategoryContainer;