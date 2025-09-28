import React from 'react';
import Button from '../common/Button';

const MemoryButton = ({ label, operation, onMemoryOperation }) => {
  // Generate proper aria labels for accessibility
  const getAriaLabel = () => {
    switch(operation) {
      case 'MC': return 'Memory Clear';
      case 'MR': return 'Memory Recall';
      case 'M+': return 'Memory Add';
      case 'M-': return 'Memory Subtract';
      default: return label;
    }
  };

  return (
    <Button
      className="memory-button"
      onClick={() => onMemoryOperation(operation)}
      ariaLabel={getAriaLabel()}
    >
      {label}
    </Button>
  );
};

export default MemoryButton;