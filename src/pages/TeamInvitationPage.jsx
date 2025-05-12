import React, { useState, useEffect } from 'react';
import { Link2 } from 'lucide-react';

const TeamInvitationPage = () => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Set body background to blue when this page is shown
    document.body.style.backgroundColor = '#1e3a8a'; // dark blue

    // Cleanup on unmount: reset background
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <div className="app-branding" style={styles.appBranding}>
        <h1 style={styles.brandingTitle}>SAMPARKA</h1>
        <p style={styles.brandingSubtext}>A tool for internal communication/Task management/Tracking</p>
      </div>

      <div className="invitation-container" style={styles.invitationContainer}>
        <a href="/TeamNameStep" className="back-link" style={styles.backLink}>
          ← Back to previous step
        </a>

        <h2 className="form-title" style={styles.formTitle}>
          Who else is on the <span style={styles.brandHighlight}>abc</span> team?
        </h2>

        <div className="input-header" style={styles.inputHeader}>
          <p style={styles.inputLabel}>Add coworker by email</p>
        </div>

        <form className="invitation-form" style={styles.invitationForm}>
          <div className="input-wrapper" style={styles.inputWrapper}>
            <input
              type="text"
              value={email}
              onChange={handleInputChange}
              placeholder="Example. abc@gmail.com"
              className="email-input"
              style={styles.emailInput}
            />
          </div>

          <div style={styles.buttonGroup}>
            <button className="next-button" style={styles.nextButton}>
              Next
            </button>
            <button className="link-button" style={styles.linkButton}>
              <Link2 size={18} style={styles.linkIcon} />
              Copy Invite Link
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

const styles = {
  appBranding: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  brandingTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: 'white',
  },
  brandingSubtext: {
    color: 'white',
    marginTop: '0.5rem',
  },
  invitationContainer: {
    maxWidth: '500px',
    margin: '0 auto',
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '1rem',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  backLink: {
    display: 'block',
    marginBottom: '1rem',
    color: '#3b82f6',
    textDecoration: 'none',
    fontSize: '0.875rem',
    fontWeight: '500',
  },
  formTitle: {
    fontSize: '1.5rem',
    color: '#1e3a8a',
    marginBottom: '1.5rem',
    fontWeight: '600',
  },
  brandHighlight: {
    color: '#4c1d95',
  },
  inputHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  inputLabel: {
    fontSize: '0.875rem',
    color: '#4b5563',
  },
  invitationForm: {
    width: '100%',
  },
  inputWrapper: {
    position: 'relative',
    marginBottom: '1rem',
  },
  emailInput: {
    width: '100%',
    padding: '0.75rem 1rem',
    fontSize: '0.875rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.5rem',
    boxSizing: 'border-box',
  },
  buttonGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  nextButton: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#3b82f6',
    color: 'white',
    fontWeight: '600',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer',
  },
  linkButton: {
    display: 'flex',
    alignItems: 'center',
    padding: '0.75rem 1rem',
    backgroundColor: 'white',
    color: '#4b5563',
    border: '1px solid #d1d5db',
    borderRadius: '0.5rem',
    fontSize: '0.875rem',
    cursor: 'pointer',
  },
  linkIcon: {
    marginRight: '0.5rem',
  },
};

export default TeamInvitationPage;
