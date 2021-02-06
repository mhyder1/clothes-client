import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import AuthApiService from '../services/auth-api-service'
import TokenService from '../services/token-service'
import AppContext from '../AppContext'

function SigninScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null)

  const context = useContext(AppContext)

  const submitHandler = (e) => {
    e.preventDefault();
    const { email, password } = e.target
    setError(null)
    AuthApiService.loginUser({
        email: email.value,
        password: password.value,
      })
        .then(() => {
          email.value = ''
          password.value = ''
        //   this.props.onLoginSuccess()
        context.setIsLoggedIn(TokenService.hasAuthToken())
        props.history.push('/')
        })
        .catch(res => {
            console.log(res.error)
            setError(res.error)
        //   this.setState({ error: res.error })
        })

  };

  return (
    <div className="form">
      <form onSubmit={submitHandler}>
            <h2>Sign-In</h2>
            <div role='alert'>
                {error && <p className='red'>{error}</p>}
            </div>
            <label>Email: </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            ></input><br />
            <label>Password: </label>
            <input
              typ="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input><br />
            <button type="submit" className="button primary">
              SignIn
            </button>
          <p>New to African Clothings</p>
            <Link to="/register">Create your account</Link>
      </form>
    </div>
  );
}

export default SigninScreen;
