import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes, BrowserRouter } from 'react-router-dom';
import InputComponent from './InputComponent';
import DisplayComponent from './DisplayComponent';
import NotFound from './NotFound';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<InputComponent />} />
      <Route
        path="/display"
        element={<DisplayComponent />}
      />
    </Routes>
  </BrowserRouter>

  );
};

export default App;
