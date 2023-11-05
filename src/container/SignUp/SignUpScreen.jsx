import React, { useState } from 'react';
import './SignUpScreen.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Log/config';

const SignUpScreen = ({ closePopup }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showForm, setShowForm] = useState(true);

  const handleSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('User signed up successfully', userCredential);
       closePopup();
      })
      .catch((error) => {
        console.log('Error during sign up', error);
      });
  };

  console.log('showForm:', showForm);
  return (
    <div className="container" id="signup">
      <div className="form-container1">
        <div className="close-button" onClick={closePopup}>
          <span className="close-icon">&times;</span>
        </div>
        <h2 className="centered-h2">Sign Up</h2>
        <form className="form" onSubmit={handleSignUp}>
          <div className="input-container1" >
            <input
              className="input1"
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-container1">
            <input
              className="input1"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-container1">
            <input
              className="input1"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="submit-button" type="submit" style={{color:'white',backgroundColor:'blue'}}>
            Sign Up
          </button>
        </form>
        <p>
          Already have an account? <a href="#login">Log In</a>
        </p>
      </div>
    </div>
  );
};

export default SignUpScreen;
