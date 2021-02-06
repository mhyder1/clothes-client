import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AppContext from "../AppContext";
import TokenService from "../services/token-service";
import config from "../config";

function CartScreen() {

  const context = useContext(AppContext);

    useEffect(() => {
        setTot()
    },[])

  const setTot = () => {
    return context.cart.reduce((start, item) => {
        return start + parseFloat(item.price)
      },0.0);
  };

  const removeItem = (cart_id) => {
      if(TokenService.hasAuthToken()) {

          const { user_id } = TokenService.readJwtToken()
        fetch(`${config.API_ENDPOINT}/carts/${user_id}`,{
            method: 'DELETE',
            headers: {
                "content-type": "application/json",
              },
            body: JSON.stringify({cart_id})
        })
        .then(() => {
            console.log('Deleted...')
            context.removeFromCart(cart_id)
        })
      }
  };
  return (
    <div className="cart">
      <div className="cart-list">
        <h3>Shopping Cart</h3>

        <table id="cartTable">
            <tbody>
          {context.cart.map((item, index) => (
            <tr id={"pro" + item.id} key={index}>
              <td>
                <img className="cart-image" src={item.image} alt="product" />
              </td>
              <td>
                <Link to={"/product/" + item.product_id}>{item.name}</Link>
              </td>
              <td>
                Quantity:
                <select >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </td>
              <td>
                <button
                  type="button"
                  className="button"
                  onClick={() => removeItem(item.id)}
                >
                  X
                </button>
              </td>
              <td className="cart-price">${item.price}</td>
            </tr>
          ))}
          </tbody>
        </table>

        <div>
          <h3>Subtotal : $ {setTot()}</h3>
          {context.isLoggedIn ? 
            <Link to="/checkout">
              <button> Finish Placing Order </button>
            </Link>
           : 
            <Link to="/signin" product={context.cart}>
              <button> Place Order </button>
            </Link>
          }
        </div>
      </div>
    </div>
  );
}

export default CartScreen;
