import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';

function HomeScreen(props){
  console.log(props)

  const {id} = props.match.params
  let products = data.products
  if(id){
     products = products.filter(product=> product.category === id)
  }
   
  
    return(
        <ul className='products'>
        {
         products.map(product => 
      <li>
        <div className='product'>
        <Link to={'/product/' + product.id}>
        <img className ='product-image' src={product.image} alt='product'/>
        </Link>
          
          <div className='product-name'>
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