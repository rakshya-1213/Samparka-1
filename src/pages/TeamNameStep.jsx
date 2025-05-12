import React, { useState } from 'react';

const TeamNameStep = () => {
  const [teamName, setTeamName] = useState('');
  const maxLength = 50;
  const remainingChars = maxLength - teamName.length;

  const handleInputChange = (e) => {
    setTeamName(e.target.value);
  };

  return (
    <>
      <div className="app-branding" style={styles.appBranding}>
        <h1 style={styles.brandingTitle}>SAMPARKA</h1>
        <p style={styles.brandingSubtext}>A tool for internal communication/Task management/Tracking</p>
      </div>

      <div className="team-name-container" style={styles.teamNameContainer}>
        <a href="/login" className="back-to-login" style={styles.backToLogin}>
          ← Back to login
        </a>
        
        <h2 className="form-title" style={styles.formTitle}>What's the name of your company or team?</h2>
        <p className="form-subtext" style={styles.formSubtext}>
          Choose a name for your Samparka workspace that your team will recognize.
        </p>

        <form className="team-name-form" style={styles.teamNameForm}>
          <div className="input-wrapper" style={styles.inputWrapper}>
            <input
              type="text"
              placeholder="Example: Google, Microsoft"
              maxLength={50}
              className="team-name-input"
              style={styles.teamNameInput}
              value={teamName}
              onChange={handleInputChange}
            />
            <span className="char-count" style={styles.charCount}>{remainingChars}</span>
          </div>

          <button
            className="form-button"
            style={teamName.length > 0 ? styles.formButtonActive : styles.formButton}
            disabled={teamName.length === 0}
          >
            Next
          </button>
        </form>
      </div>
    </>
  )
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
  teamNameContainer: {
    maxWidth: '500px',
    margin: '0 auto',
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '1rem',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
  },
  backToLogin: {
    display: 'block',
    marginBottom: '1.5rem',
    color: '#3b82f6',
    textDecoration: 'none',
    fontSize: '0.875rem',
    fontWeight: '500'
  },
  stepCount: {
    fontSize: '0.875rem',
    color: '#6b7280'
  },
  formTitle: {
    fontSize: '1.5rem',
    color: '#1e3a8a',
    marginBottom: '0.5rem',
    marginTop: '0.5rem',
    fontWeight: '600'
  },
  formSubtext: {
    fontSize: '0.875rem',
    color: '#4b5563',
    marginBottom: '1.5rem'
  },
  teamNameForm: {
    width: '100%'
  },
  inputWrapper: {
    position: 'relative',
    marginBottom: '1.5rem'
  },
  teamNameInput: {
    width: '100%',
    padding: '0.75rem 1rem',
    fontSize: '0.875rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.5rem',
    boxSizing: 'border-box'
  },
  charCount: {
    position: 'absolute',
    top: '50%',
    right: '1rem',
    transform: 'translateY(-50%)',
    fontSize: '0.75rem',
    color: '#9ca3af'
  },
  formButton: {
    width: '100%',
    padding: '0.75rem',
    backgroundColor: '#3b82f6',
    color: 'white',
    fontWeight: '600',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'not-allowed',
    opacity: '0.6'
  },
  formButtonActive: {
    width: '100%',
    padding: '0.75rem',
    backgroundColor: '#3b82f6',
    color: 'white',
    fontWeight: '600',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    opacity: '1'
  }
};

export default TeamNameStep;