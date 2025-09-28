import React from 'react';

const HistoryHeader = ({ onClearHistory }) => {
  return (
    <div className="history-header">
      <h3>History</h3>
      <button 
        className="history-clear" 
        onClick={onClearHistory}
        aria-label="Clear calculation history"
      >
        Clear
      </button>
    </div>
  );
};

export default HistoryHeader;