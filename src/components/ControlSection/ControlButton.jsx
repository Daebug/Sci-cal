import React from 'react';
import Button from '../common/Button';

const ControlButton = ({ label, action, type }) => {
  // Generate appropriate aria labels
  const getAriaLabel = () => {
    if (type === 'clear') return 'Clear all';
    if (type === 'delete') return 'Delete last character';
    return label;
  };
  
  return (
    <Button
      className={`control-button ${type}`}
      onClick={action}
      ariaLabel={getAriaLabel()}
    >
      {label}
    </Button>
  );
};

export default ControlButton;