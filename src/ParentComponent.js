// ParentComponent
import React, { useState } from 'react';
import InputComponent from './InputComponent';
import DisplayComponent from './DisplayComponent';

const ParentComponent = () => {
  const [submittedValue, setSubmittedValue] = useState('');

  const handleSubmit = (value) => {
    setSubmittedValue(value);
  };

  return (
    <div>
      <InputComponent onSubmit={handleSubmit} />
      {submittedValue && <DisplayComponent submittedValue={submittedValue} />}
    </div>
  );
};

export default ParentComponent;
