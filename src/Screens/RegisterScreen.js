import React, {useState} from "react";
import { Link } from "react-router-dom";
import AuthApiService from '../services/auth-api-service'
import CartApiService from "../services/cart-api-service";

function RegisterScreen(props) {

  const [error, setError] = useState(null)
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    AuthApiService.registerUser(user)
        .then((user_id) => {
          e.target.email.value = ''
          e.target.password.value = ''
          e.target.name.value = ''
        props.history.push('/signin')
        // CartApiService.createCart(user_id)
        })
        .catch(res => {
            console.log(res.error)
            setError(res.error)
        })
    //create user object and send this to write in the table in backend.
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h2>Create Account</h2>
        <label htmlFor="name">Name: </label>
        <input type="name" id="name" name="name"></input><br />
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="email"></input><br />
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" name="password"></input><br />
        {/* <label htmlFor="rePassword">Re-Enter-Password</label>
        <input type="password" id="rePassword" name="rePassword"></input> */}
        <button type="submit" className="button primary">
          Register
        </button><br />
        Already have an account?
        <Link to="/signin">Sign In</Link>
      </form>
    </div>
  );
}

export default RegisterScreen;
