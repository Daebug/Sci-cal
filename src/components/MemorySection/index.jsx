import React from 'react';
import MemoryButton from './MemoryButton';
import ModeToggle from './ModeToggle';
import './MemorySection.css';

const MemorySection = ({ onMemoryOperation, toggleMode, isDegree }) => {
  const memoryButtons = [
    { label: 'MC', operation: 'MC' },
    { label: 'MR', operation: 'MR' },
    { label: 'M+', operation: 'M+' },
    { label: 'M-', operation: 'M-' },
  ];
  
  return (
    <div className="memory-buttons">
      {memoryButtons.map((button) => (
        <MemoryButton
          key={button.label}
          label={button.label}
          operation={button.operation}
          onMemoryOperation={onMemoryOperation}
        />
      ))}
      <ModeToggle isDegree={isDegree} toggleMode={toggleMode} />
    </div>
  );
};

export default MemorySection;