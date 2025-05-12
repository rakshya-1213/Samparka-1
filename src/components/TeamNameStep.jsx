import React, { useState } from 'react';

const TeamNameStep = () => {
  const [teamName, setTeamName] = useState('');

  return (
    <div className="team-step-container">
      <div className="team-step-card">
        <p className="step-count">Step 1 of 3</p>
        <h1 className="team-step-title">What’s the name of your team?</h1>
        <p className="team-step-subtext">
          This will be the name of your workspace and can be changed later.
        </p>

        <div className="input-wrapper">
          <input
            type="text"
            placeholder="e.g. Marketing Team"
            className="team-step-input"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
          />
          <span className="char-count">{teamName.length}/50</span>
        </div>

        <button className="team-step-button" disabled>
          Continue
        </button>
      </div>
    </div>
  );
};

export default TeamNameStep;
