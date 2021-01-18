import React from 'react';
import { Link } from 'react-router-dom';

function RegisterScreen(prop){
    return(
        <div className='form'>
            <form>
                <ul>
                    <li>
                        <h2>Create Account</h2>
                    </li>
                    <li>
                        <label htmlFor='name'>
                            Name
                        </label>
                        <input type='name' id='name' name='name'></input>
                    </li>
                    <li>
                        <label htmlFor='email'>
                            Email
                        </label>
                        <input type='email' id='email' name='email'></input>
                    </li>
                    <li>
                        <label htmlFor='password'>
                            Password
                        </label>
                        <input type='password' id='password' name='password'></input>
                    </li>
                    <li>
                        <label htmlFor='rePassword'>
                            Re-Enter-Password
                        </label>
                        <input type='password' id='rePassword' name='rePassword'></input>
                    </li>
                    <li>
                        <button type="submit" className="button primary">
                            Register
                        </button>
                    </li>
                    <li>
                        Already have an account?
                        
                    </li>
                    <li>
            
                    <Link to='/signin'>Sign In</Link>
                    </li>
                </ul>
            </form>
        </div>
    )
}

export default RegisterScreen;