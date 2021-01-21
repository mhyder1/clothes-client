import React from 'react';
import { Link } from 'react-router-dom';


function SigninScreen(props){
    // let users = context.users

    return(
        <div className='form'>
            <form>
                <ul>
                    <li>
                        <h2>Sign-In</h2>
                    </li>
                    
                    <li>
                        <label>
                            Email
                        </label>
                        <input type='email' name='email' id='email'></input>
                    </li>
                    <li>
                        <label>
                            Password
                        </label>
                        <input typ='password' id='password' name='password'></input>
                    </li>
                    <li>
                        <button type='submit' className='button primary'>SignIn</button>
                    </li>
                    <li>
                        New to African Clothings
                    </li>
                    <li>
            
                    <Link to='/register'>Create your account</Link>
                    </li>
                </ul>
            </form>

        </div>
    )
}

export default SigninScreen;