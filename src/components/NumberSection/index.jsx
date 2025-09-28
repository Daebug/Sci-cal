import React from 'react';
import NumberButton from './NumberButton';
import './NumberSection.css';

const NumberSection = ({ onButtonClick }) => {
  const numberButtons = [
    { label: '7', value: '7' },
    { label: '8', value: '8' },
    { label: '9', value: '9' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
    { label: '6', value: '6' },
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '0', value: '0' },
    { label: '.', value: '.' },
  ];
  
  return (
    <div className="number-pad">
      {numberButtons.map((button) => (
        <NumberButton
          key={button.label}
          label={button.label}
          value={button.value}
          onButtonClick={onButtonClick}
        />
      ))}
    </div>
  );
};

export default NumberSection;