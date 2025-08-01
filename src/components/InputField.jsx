// InputField.jsx
import React from 'react';

import { useState } from 'react';

const InputField = ({ type, placeholder, icon }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  return (
    <div className="input-wrapper">
      <input
        type={isPasswordShown ? 'text' : type}
        placeholder={placeholder}
        className="input-field"
        required
      />
      <i className="material-icons">{icon}</i>
      {type === 'password' && (
        <i
          onClick={() => setIsPasswordShown((prevState) => !prevState)}
          className="material-icons eye-icon"
        >
          {isPasswordShown ? 'visibility' : 'visibility_off'}
        </i>
      )}
    </div>
  );
};

export default InputField;