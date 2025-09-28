import React from 'react';
import Button from '../common/Button';

const NumberButton = ({ label, value, onButtonClick }) => {
  // Special styling for zero button
  const isZero = label === '0';
  
  return (
    <Button
      className={`number-button ${isZero ? 'zero-button' : ''}`}
      onClick={() => onButtonClick(value)}
      ariaLabel={label === '.' ? 'Decimal point' : `Number ${label}`}
    >
      {label}
    </Button>
  );
};

export default NumberButton;