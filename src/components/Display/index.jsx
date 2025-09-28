import React from 'react';
import './Display.css';

const Display = ({ input, result, memory, isDegree }) => {
  const memoryStatus = memory !== 0 ? 'M' : '';
  
  // Format the input for better readability
  const formattedInput = input.replace(/\*/g, '×').replace(/\//g, '÷');
  
  return (
    <div className="calculator-display">
      <div className="display-indicators">
        {memory !== 0 && <div className="display-memory">{memoryStatus}</div>}
        <div className="display-mode">{isDegree ? 'DEG' : 'RAD'}</div>
      </div>
      <div className="display-input" aria-label="Expression">{formattedInput || '0'}</div>
      <div className="display-result" aria-label="Result">{result}</div>
    </div>
  );
};

export default Display;