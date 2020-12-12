import React from 'react';
import './related.css';
import {Link} from 'react-router-dom'


const Related = (props) =>{

    const reload = () =>{
        setTimeout(() => {window.location.reload()}, 200)
        
    }
    
    return (
        <div className='related-container'>
            <p >You might also like</p>
            {props.data.map(elem => (
                <div className='related-item' key={elem.id}>
                    <Link to={`/product/${elem.id}`} >
                        <img src={elem.mainImage} alt="" className='related-main-image' onClick={reload}/>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Related;