import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import TokenService from "../services/token-service";
import IdleService from "../services/idle-service";
import AppContext from '../AppContext'

export default function Header(props) {
    // const [isLoggedIn, setIsLoggedIn] = useState(false)

    const context = useContext(AppContext)

    // useEffect(() => {
    //     // if(TokenService.hasAuthToken()) {
    //         setIsLoggedIn(TokenService.hasAuthToken())
    //     // }
    // },[isLoggedIn, TokenService.hasAuthToken()])

  const logout = () => {
    TokenService.clearAuthToken();
    /* when logging out, clear the callbacks to the refresh api and idle auto logout */
    TokenService.clearCallbackBeforeExpiry();
    IdleService.unRegisterIdleResets();

    context.setIsLoggedIn(TokenService.hasAuthToken())
  };

  const LogoutLink = () => {
      return <Link to="/" onClick={logout}> Logout </Link>
  }

  const LoginLink = () => {
      return <Link to="/signin"> Sign In </Link>
  }

  return (
      
    <header className="header">
      <div className="brand">
        <button onClick={props.openMenu}>&#9776;</button>
      </div>
      <div className="header-links">
        <Link to="/">African Clothing</Link>
      </div>
      <div className="header-links">
        <Link to="/cart"> Cart-{props.cart.length}</Link>
        
        {   
            context.isLoggedIn
            ? <LogoutLink />
            : <LoginLink />
        }
      </div>
    </header>
  );
}
