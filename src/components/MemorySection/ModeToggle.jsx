import React from 'react';
import Button from '../common/Button';

const ModeToggle = ({ isDegree, toggleMode }) => {
  return (
    <Button
      className="memory-button mode-toggle"
      onClick={toggleMode}
      ariaLabel={`Switch to ${isDegree ? 'Radians' : 'Degrees'} mode`}
    >
      {isDegree ? 'DEG' : 'RAD'}
    </Button>
  );
};

export default ModeToggle;