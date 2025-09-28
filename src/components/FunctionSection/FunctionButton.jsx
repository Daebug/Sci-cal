import React from 'react';
import Button from '../common/Button';

const FunctionButton = ({ label, value, onButtonClick }) => {
  // Generate appropriate aria labels for each function
  const getAriaLabel = () => {
    switch(label) {
      case 'sin': return 'Sine function';
      case 'cos': return 'Cosine function';
      case 'tan': return 'Tangent function';
      case 'log': return 'Logarithm base 10 function';
      case 'ln': return 'Natural logarithm function';
      case '√': return 'Square root function';
      case '^': return 'Power function';
      case 'π': return 'Pi constant';
      case 'e': return 'Euler\'s number constant';
      case '(': return 'Open parenthesis';
      case ')': return 'Close parenthesis';
      case '%': return 'Modulo operator';
      default: return `${label} function`;
    }
  };

  return (
    <Button
      className="function-button"
      onClick={() => onButtonClick(value)}
      ariaLabel={getAriaLabel()}
    >
      {label}
    </Button>
  );
};

export default FunctionButton;