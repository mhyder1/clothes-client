import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';

function HomeScreen(props){
  console.log(props)

  const {id} = props.match.params
  const products = data.products.filter(product=> product.category === id)
    return(
        <ul className='products'>
        {products.length > 0 ? 
         products.map(product => 
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
      : 
      <h1>Product Not Available</h1>
        }
      
    </ul>
    )
}

export default HomeScreen;