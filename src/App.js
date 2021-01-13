
import './App.css';

import React from 'react';

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
          <a href='index.html'>African Clothing</a>
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
     
      <main class ='main'>
        <div className='content'>
          <ul className='products'>
          <li>
            <div className='product'>
              <img className ='product-image' src='/images/ankara.png' alt='product'/>
              <div className='product-name'>
                <a href='product.html'>Skirt and blouse</a>
              </div>
              <div className='product-brand'>Ankara</div>
              <div className='product-price'>$19.99</div>
            </div>
          </li>
          
           <li>
            <div className='product'>
              <img className ='product-image' src='/images/ankara.png' alt='product'/>
              <div className='product-name'>
                <a href='product.html'>Skirt and blouse</a>
              </div>
              <div className='product-brand'>Ankara</div>
              <div className='product-price'>$19.99</div>
            </div>
          </li>

           <li>
            <div className='product'>
              <img className ='product-image' src='images/ankara.png' alt='product'/>
              <div className='product-name'>
                <a href='product.html'>Skirt and blouse</a>
              </div>
              <div className='product-brand'>Ankara</div>
              <div className='product-price'>$19.99</div>
            </div>
          </li>

           <li>
            <div className='product'>
              <img className ='product-image' src='/images/ankara.png' alt='product'/>
              <div className='product-name'>
                <a href='product.html'>Skirt and blouse</a>
              </div>
              <div className='product-brand'>Ankara</div>
              <div className='product-price'>$19.99</div>
            </div>
          </li>
           <li>
            <div className='product'>
              <img class ='product-image' src='/images/ankara.png' alt='product'/>
              <div className='product-name'>
                <a href='product.html'>Skirt and blouse</a>
              </div>
              <div className='product-brand'>Ankara</div>
              <div className='product-price'>$19.99</div>
            </div>
          </li>
           <li>
            <div className='product'>
              <img class ='product-image' src='/images/ankara.png' alt='product'/>
              <div className='product-name'>
                <a href='product.html'>Skirt and blouse</a>
              </div>
              <div className='product-brand'>Ankara</div>
              <div className='product-price'>$19.99</div>
            </div>
          </li>
           <li>
            <div className='product'>
              <img class ='product-image' src='/images/ankara.png' alt='product'/>
              <div className='product-name'>
                <a href='product.html'>Skirt and blouse</a>
              </div>
              <div className='product-brand'>Ankara</div>
              <div className='product-price'>$19.99</div>
            </div>
          </li>
           <li>
            <div className='product'>
              <img class ='product-image' src='/images/ankara.png' alt='product'/>
              <div className='product-name'>
                <a href='product.html'>Skirt and blouse</a>
              </div>
              <div className='product-brand'>Ankara</div>
              <div className='product-price'>$19.99</div>
            </div>
          </li>
        </ul>
        </div>
        
        </main>

    <footer class='footer'>All right reserved</footer>
    </div>
  );
}

export default App;