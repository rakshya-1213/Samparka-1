import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import InputField from './components/InputField';
import SocialLogin from './components/SocialLogin';
import logo from './assets/logo-transparent.png'; // Make sure the logo is in the right path

const App = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#1e3a8a'; // Blue background

    return () => {
      document.body.style.backgroundColor = ''; // Reset on unmount
    };
  }, []);

  return (
    <>
      <div className="app-branding">
        <img src={logo} alt="Samparka Logo" className="logo" />
        <h1>SAMPARKA</h1>
        <p>A tool for internal communication/Task management/Tracking</p>
      </div>

      <div className="login-container">
        <h2 className="form-title">Log in with</h2>
        <SocialLogin />

        <p className="separator"><span>or</span></p>

        <form action="#" className="login-form">
          <InputField type="email" placeholder="Email address" icon="mail" />
          <InputField type="password" placeholder="Password" icon="lock" />

          <Link to="/ForgotPasswordPage" className="forgot-pass-link">Forgot Password?</Link>

          <button className="login-button">Log In</button>
        </form>

        <p className="signup-text">
          Don't have an account?{" "}
          <Link to="/SignupPage">Signup now</Link>
        </p>
      </div>
    </>
  );
};

export default App;
