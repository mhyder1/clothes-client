import React from 'react';
import  {  Route, Link } from 'react-router-dom';
import data from './data';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import './App.css';



function App() {

  const openMenu = ()=> {
    document.querySelector('.sidebar').classList.add('open');

  };

  const closeMenu = ()=> {
    document.querySelector('.sidebar').classList.remove('open');
  };
  return (
    <div className='grid-container'>
      <header className='header'>
        <div className='brand'>
          <button onClick={openMenu}>
            &#9776;
          </button>
        </div>
        <div className='header-links'>
          {/* <a href='index.html'>African Clothing</a> */}
          <Link to='/'>African Clothing</Link>
        </div>
        <div className='header-links'>
          <a href='cart.html'> Cart</a>
          <a href='signin.html'> Sign In </a>
        </div>
      </header>
      <aside className='sidebar'>
        <h3>Shopping Categories</h3>
        <button className='sidebar-close-button' onClick={closeMenu}>X</button>
        <ul>
          <li><a href='index.html'>Skirt and Blouse</a></li>
          <li><a href='index.html'>Gown</a></li>
          <li><a href='index.html'>Skirt</a></li>
          <li><a href='index.html'>Blouse</a></li>
  
        </ul>
      </aside>
     
      <main className ='main'>
        <div className='content'>
          <Route path='/product/:id' component={ProductScreen}/>
          <Route path='/' exact={true} component={HomeScreen}/>
          {/* <ul className='products'>
            {
              data.products.map(product => 
          <li>
            <div className='product'>
              <img className ='product-image' src={product.image} alt='product'/>
              <div className='product-name'>
                <a href='product.html'>{product.name}</a>
              </div>
              <div className='product-brand'>{product.brand}</div>
              <div className='product-size'>{product.size}</div>
              <div className='product-price'>${product.price}</div>
            </div>
          </li>)
            }
          
        </ul> */}
        </div>
        
        </main>

    <footer className='footer'>All right reserved</footer>
    </div>
  );
}

export default App;