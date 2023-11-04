import React, { useEffect, useState } from 'react';
import './LoginScreen.css';
import { auth, provider } from '../Log/config';
import { signInWithPopup } from 'firebase/auth';
import 'font-awesome/css/font-awesome.min.css';
import { signInWithEmailAndPassword } from 'firebase/auth';


const LoginScreen = ({ closePopup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateForm = () => {
    let isValid = true;
    setUsernameError('');
    setPasswordError('');

    // Check for username (email) validity
    if (!username) {
      setUsernameError('Username is required');
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(username)) {
      setUsernameError('Invalid email format');
      isValid = false;
    }

    // Check for password validity
    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters');
      isValid = false;
    }

    return isValid;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (validateForm()) {
      signInWithEmailAndPassword(auth,username, password).then((userCredential) =>{
        console.log(userCredential);
        console.log('User Log in Succesfully');
        closePopup();
      }).catch((error) =>{
        console.log(error);
      })
    }
  };
  const [value, setValue] = useState('');
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
      closePopup();
    })
    .catch((error)=>{
      console.error('Google Sign-In Error:',error);
    })
  }
  useEffect(() => {
    setValue(localStorage.getItem("email"))
  })

  return (
    <div className="container" id="log">
      <div className="form-container">
        <div className="close-button" onClick={closePopup}>
          <span className="close-icon">&times;</span>
        </div>
        <h2 className="log">Login</h2>
        <form className="form" onSubmit={handleLogin}>
          <div className="input-container1">
            <label htmlFor="username"></label>
            <input
              className={`input1 ${usernameError && 'error'}`}
              type="text"
              id="username"
              placeholder="Enter your email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{backgroundColor:'white'}}
            />
            <div className="error-message">{usernameError}</div>
          </div>
          <div className="input-container1">
            <label htmlFor="password"></label>
            <input
              className={`input1 ${passwordError && 'error'}`}
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="error-message">{passwordError}</div>
          </div>
          <button className="submit-button" type="submit" style={{color:'white',backgroundColor:'blue'}}>
            Login
          </button>        
        </form>
        <p>
          Don't have an account? <a href="#signup">Sign Up</a>
        </p>
        <button className="google-button" onClick={handleClick} style={{color:'white',backgroundColor:'blue'}} >
          <div className='circle2'>
        <i class="fa fa-google" aria-hidden="true" style={{margin:'0 20px 0 20px',color:'black'}}></i> 
        </div>
        Sign in with Google
          </button>
      </div>
    </div>
  );
};

export default LoginScreen;
