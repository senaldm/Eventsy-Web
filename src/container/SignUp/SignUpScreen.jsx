import React, { useState } from 'react';
import './SignUpScreen.css';

const SignUpScreen = ({ closePopup }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    // Add your sign-up logic here
    // You can use the 'name', 'email', and 'password' state variables
  };

  return (
    <div className="container" id="signup">
      <div className="form-container">
        <div className="close-button" onClick={closePopup}>
          <span className="close-icon">&times;</span>
        </div>
        <h2 className="centered-h2">Sign Up</h2>
        <form className="form" onSubmit={handleSignUp}>
          <div className="input-container">
            <input
              className="input"
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-container">
            <input
              className="input"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-container">
            <input
              className="input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="submit-button" type="submit">
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
