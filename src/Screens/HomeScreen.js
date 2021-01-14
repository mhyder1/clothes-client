import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';

function HomeScreen(props){
    return(
        <ul className='products'>
        {
          data.products.map(product => 
      <li>
        <div className='product'>
        <Link to={'/product/' + product.id}>
        <img className ='product-image' src={product.image} alt='product'/>
        </Link>
          
          <div className='product-name'>
            {/* <a href='product.html'>{product.name}</a> */}
          <Link to={'/product/' + product.id}>{product.name}</Link>
          </div>
          <div className='product-brand'>{product.brand}</div>
          <div className='product-size'>{product.size}</div>
          <div className='product-price'>${product.price}</div>
        </div>
      </li>)
        }
      
    </ul>
    )
}

export default HomeScreen;