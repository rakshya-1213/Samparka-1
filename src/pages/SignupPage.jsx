import React, { useEffect } from 'react';

import InputField from "../components/InputField"
import SocialLogin from "../components/SocialLogin"

const SignupPage = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#1e3a8a'; // Dark blue background

    // Cleanup function to reset the background color when the component is unmounted
    return () => {
      document.body.style.backgroundColor = ''; // Reset to default
    };
  }, []);

  return (
    <>
      <div className="app-branding">
        <h1>SAMPARKA</h1>
        <p>A tool for internal communication/Task management/Tracking</p>
      </div>

      <div className="login-container">
        <h2 className="form-title">Sign up with</h2>
        <SocialLogin />

        <p className="separator"><span>or</span></p>

        <form action="#" className="login-form">
          <InputField type="text" placeholder="Username" icon="person" />
          <InputField type="email" placeholder="Email address" icon="mail" />
          <InputField type="password" placeholder="Password" icon="lock" />
          <InputField type="password" placeholder="Confirm Password" icon="lock" />

          <div className="terms-checkbox">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></label>
          </div>

          <button className="login-button">Create Account</button>
        </form>

        <p className="signup-text">Already have an account? <a href="/login">Log in</a></p>
      </div>
    </>
  );
};

export default SignupPage;
