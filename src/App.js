import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
// import data from './data';
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import CartScreen from "./Screens/CartScreen";
import "./App.css";
import SigninScreen from "./Screens/SigninScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import Header from "./Screens/Header";
import OrderConfirmation from "./Screens/OrderConfirmation";
import AppContext from "./AppContext";
import config from "./config";
import IdleService from "./services/idle-service";
import TokenService from "./services/token-service";
import AuthApiService from "./services/auth-api-service";

function App() {
  const [cart, setCart] = useState([]);
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(TokenService.hasAuthToken());

  useEffect(() => {
    fetch(`${config.API_ENDPOINT}/products`)
      .then((res) => res.json())
      .then((products) => setProducts(products));

    if (TokenService.hasAuthToken()) {
      const { user_id } = TokenService.readJwtToken();
      fetch(`${config.API_ENDPOINT}/carts/${user_id}`)
        .then((res) => res.json())
        .then((cart) => setCart(cart));
    }

    //--------------------------------------
    /*
      set the function (callback) to call when a user goes idle
      we'll set this to logout a user when they're idle
    */
    IdleService.setIdleCallback(logoutFromIdle);

    /* if a user is logged in */
    if (TokenService.hasAuthToken()) {
      /*
       tell the idle service to register event listeners
       the event listeners are fired when a user does something, e.g. move their mouse
       if the user doesn't trigger one of these event listeners,
         the idleCallback (logout) will be invoked
     */
      IdleService.regiserIdleTimerResets();

      /*
       Tell the token service to read the JWT, looking at the exp value
       and queue a timeout just before the token expires
     */
      TokenService.queueCallbackBeforeExpiry(() => {
        /* the timoue will call this callback just before the token expires */
        AuthApiService.postRefreshToken();
      });
    }

    return () => {
      /*
      when the app unmounts,
      stop the event listeners that auto logout (clear the token from storage)
    */
      IdleService.unRegisterIdleResets();
      /*
      and remove the refresh endpoint request
    */
      TokenService.clearCallbackBeforeExpiry();
    };
  }, []);

  const logoutFromIdle = () => {
    /* remove the token from localStorage */
    TokenService.clearAuthToken();
    /* remove any queued calls to the refresh endpoint */
    TokenService.clearCallbackBeforeExpiry();
    /* remove the timeouts that auto logout when idle */
    IdleService.unRegisterIdleResets();
    /*
      react won't know the token has been removed from local storage,
      so we need to tell React to rerender
    */
    // forceUpdate()
  };

  const openMenu = () => {
    setOpen(true);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  const addToCart = (cart) => {
    setCart(cart);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id))
  }

  const value = {
    cart,
    addToCart,
    setCart,
    products,
    isLoggedIn,
    setIsLoggedIn,
    removeFromCart
  };
  return (
    <AppContext.Provider value={value}>
      <div className="grid-container">
        <Header openMenu={openMenu} cart={cart} />
        {/* <aside className='sidebar'> */}
        <aside className={open ? "sidebar open" : "sidebar"}>
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
            X
          </button>
          <ul className="categories">
            <li key="category1">
              <Link to="/category/Skirt and Blouse" onClick={closeMenu}>
                Skirt and Blouse
              </Link>
            </li>
            <li key="category2">
              <Link to="/category/Gown" onClick={closeMenu}>
                Gown
              </Link>
            </li>
            <li key="category3">
              <Link to="/category/Blouse" onClick={closeMenu}>
                Blouse
              </Link>
            </li>
            <li key="category4">
              <Link to="/category/Skirt" onClick={closeMenu}>
                Skirt
              </Link>
            </li>
          </ul>
        </aside>

        <main className="main">
          <div className="content">
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/category/:id" component={HomeScreen} />
            <Route path="/" exact component={HomeScreen} />
            <Route path="/checkout" component={OrderConfirmation} />
          </div>
        </main>

        <footer className="footer">All right reserved</footer>
      </div>
    </AppContext.Provider>
  );
}

export default App;
