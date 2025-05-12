import React, { useEffect } from 'react';

import InputField from "../components/InputField"

const ForgotPasswordPage = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#1e3a8a'; // Dark blue background

    // Cleanup function to reset the background color when the component is unmounted
    return () => {
      document.body.style.backgroundColor = ''; // Reset to default
    };
  }, []);

  return(
    <>
      <div className="app-branding">
        <h1>SAMPARKA</h1>
        <p>A tool for internal communication/Task management/Tracking</p>
      </div>
      
      <div className="login-container">
        <h2 className="form-title">Reset Password</h2>
        <p className="reset-instructions">Enter your email address and we'll send you instructions to reset your password.</p>

        <form action="#" className="login-form"> 
          <InputField type="email" placeholder="Email address" icon="mail" />

          <button className="login-button">Send Reset Link</button>
        </form>

        <p className="signup-text">
          <a href="/login">&larr; Back to Login</a>
        </p>
      </div>
    </>
  );
}

export default ForgotPasswordPage;
