import React from 'react';
import MemorySection from '../MemorySection/index';
import FunctionSection from '../FunctionSection/index';
import ControlSection from '../ControlSection/index';
import NumberSection from '../NumberSection/index';
import OperatorSection from '../OperatorSection/Index';
import './Keypad.css';

const Keypad = ({
  onButtonClick,
  onMemoryOperation,
  toggleMode,
  isDegree,
  onClear,
  onDelete,
  onCalculate
}) => {
  return (
    <div className="calculator-keypad">
      <MemorySection 
        onMemoryOperation={onMemoryOperation} 
        toggleMode={toggleMode} 
        isDegree={isDegree} 
      />
      
      <FunctionSection onButtonClick={onButtonClick} />
      
      <div className="main-buttons">
        <ControlSection 
          onClear={onClear} 
          onDelete={onDelete} 
        />
        
        <div className="calculator-grid">
          <NumberSection onButtonClick={onButtonClick} />
          <OperatorSection 
            onButtonClick={onButtonClick} 
            onCalculate={onCalculate} 
          />
        </div>
      </div>
    </div>
  );
};

export default Keypad;