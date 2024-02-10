// InputComponent.js
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'

const InputComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    // Redirect to the display page with the submitted value as a query parameter
    navigate(`/display?value=${inputValue}`);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default InputComponent;
