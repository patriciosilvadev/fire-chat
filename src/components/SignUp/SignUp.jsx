import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HOME_ROUTE, LOGIN_ROUTE, SIGN_UP_ROUTE } from '../../routes';
import { signUp } from '../../services/auth';
import { auth } from '../../services/firebase';

const SignUp = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const formSubmit = async(event) => {
    event.preventDefault();

    setError('');

    try {
      await signUp(email, password);
    }catch(e) {
      setError(e.message);
    }
  }

  return(
    <div>
      <form onSubmit={formSubmit}>
        <h1>
          Sign Up to
          <Link to={HOME_ROUTE}>Fire Chat</Link>
        </h1>
        <p>Fill in the form bellow to create an account</p>
        <div>
          <input
            type="email"
            onChange={(e) => setEmail(e)}
            value={email}
            name="email" 
            placeholder="Email"/>
        </div>
        <div>
          <input
            type="password"
            onChange={(e) => setPassword(e)}
            value={password}
            name="email" 
            placeholder="Email"/>
        </div>
        <div>
          { error && <p>{error}</p> }
          <button type="submit">Sign up</button>
        </div>
        <p>Already have an account? <Link to={LOGIN_ROUTE}>Login</Link></p>
      </form>
    </div>
  );
}

export default SignUp;
