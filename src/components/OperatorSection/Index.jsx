import React from 'react';
import OperatorButton from './OperatorButton';
import './OperatorSection.css';

const OperatorSection = ({ onButtonClick, onCalculate }) => {
  const operatorButtons = [
    { label: '÷', value: () => onButtonClick('/') },
    { label: '×', value: () => onButtonClick('*') },
    { label: '-', value: () => onButtonClick('-') },
    { label: '+', value: () => onButtonClick('+') },
    { label: '=', action: onCalculate, isEquals: true },
  ];
  
  return (
    <div className="operator-buttons">
      {operatorButtons.map((button) => (
        <OperatorButton
          key={button.label}
          label={button.label}
          value={button.value}
          action={button.action}
          isEquals={button.isEquals}
        />
      ))}
    </div>
  );
};

export default OperatorSection;