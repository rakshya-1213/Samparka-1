import React, { useEffect } from 'react';

const ResetPass = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#1e3a8a'; // Dark blue background

    // Cleanup function to reset the background color when the component is unmounted
    return () => {
      document.body.style.backgroundColor = ''; // Reset to default
    };
  }, []);

  return (
    <>
      <div className="app-branding" style={styles.appBranding}>
        <h1 style={styles.brandingTitle}>SAMPARKA</h1>
        <p style={styles.brandingSubtext}>A tool for internal communication/Task management/Tracking</p>
      </div>
      
      <div className="confirmation-container" style={styles.confirmationContainer}>
        <h2 className="form-title" style={styles.formTitle}>Check Your Email</h2>
        <p className="confirmation-message" style={styles.confirmationMessage}>
          We've sent a password reset link to your email. Please follow the instructions to reset your password.
        </p>
        
        <a href="/login" className="login-button" style={styles.loginButton}>Back to Login</a>
      </div>
    </>
  );
};

const styles = {
  appBranding: {
    textAlign: 'center',
    marginBottom: '2rem'
  },
  brandingTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: 'white'
  },
  brandingSubtext: {
    color: 'white',
    marginTop: '0.5rem'
  },
  confirmationContainer: {
    maxWidth: '500px',
    margin: '0 auto',
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '1rem',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
  },
  formTitle: {
    fontSize: '1.5rem',
    color: '#1e3a8a',
    marginBottom: '1rem',
    fontWeight: '600',
    textAlign: 'center'
  },
  confirmationMessage: {
    fontSize: '0.875rem',
    color: '#4b5563',
    marginBottom: '2rem',
    textAlign: 'center',
    lineHeight: '1.5'
  },
  loginButton: {
    display: 'block',
    width: '100%',
    padding: '0.75rem',
    backgroundColor: '#3b82f6',
    color: 'white',
    fontWeight: '600',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    textAlign: 'center',
    textDecoration: 'none'
  }
};

export default ResetPass;
