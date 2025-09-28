import React from 'react';
import FunctionButton from './FunctionButton';
import './FunctionSection.css';

const FunctionSection = ({ onButtonClick }) => {
  const functionButtons = [
    { label: 'sin', value: 'sin(' },
    { label: 'cos', value: 'cos(' },
    { label: 'tan', value: 'tan(' },
    { label: 'log', value: 'log(' },
    { label: 'ln', value: 'ln(' },
    { label: '√', value: '√(' },
    { label: '^', value: '^' },
    { label: 'π', value: 'π' },
    { label: 'e', value: 'e' },
    { label: '(', value: '(' },
    { label: ')', value: ')' },
    { label: '%', value: '%' },
  ];
  
  return (
    <div className="function-buttons">
      {functionButtons.map((button) => (
        <FunctionButton
          key={button.label}
          label={button.label}
          value={button.value}
          onButtonClick={onButtonClick}
        />
      ))}
    </div>
  );
};

export default FunctionSection;