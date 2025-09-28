import React from 'react';
import ControlButton from './ControlButton';
import './ControlSection.css';

const ControlSection = ({ onClear, onDelete }) => {
  return (
    <div className="calculator-controls">
      <ControlButton
        label="AC"
        type="clear"
        action={onClear}
      />
      <ControlButton
        label="DEL"
        type="delete"
        action={onDelete}
      />
    </div>
  );
};

export default ControlSection;