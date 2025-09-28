import React from 'react';
import Button from '../common/Button';

const OperatorButton = ({ label, value, action, isEquals }) => {
  // Generate appropriate aria labels
  const getAriaLabel = () => {
    switch(label) {
      case '÷': return 'Division';
      case '×': return 'Multiplication';
      case '-': return 'Subtraction';
      case '+': return 'Addition';
      case '=': return 'Calculate result';
      default: return label;
    }
  };
  
  return (
    <Button
      className={`operator-button ${isEquals ? 'equals' : ''}`}
      onClick={() => action ? action() : value()}
      ariaLabel={getAriaLabel()}
    >
      {label}
    </Button>
  );
};

export default OperatorButton;