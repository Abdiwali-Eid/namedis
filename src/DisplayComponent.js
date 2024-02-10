// DisplayComponent.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const DisplayComponent = () => {
  const location = useLocation();
  const submittedValue = new URLSearchParams(location.search).get('value');

  return (
    <div>
      <h2>Submitted Value:</h2>
      <p>{submittedValue}</p>
    </div>
  );
};

export default DisplayComponent;
