import React from 'react';
import Calculator from './components/Calculator';
import './styles/global.css';

function App() {
  return (
    <div className="calculator-container">
      <Calculator />
      <div className="app-info">
        <p className="app-credit">Scientific Calculator</p>
        <p className="app-version">v1.0.0</p>
      </div>
    </div>
  );
}

export default App;