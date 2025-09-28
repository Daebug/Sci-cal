import React from 'react';
import HistoryHeader from './HistoryHeader';
import HistoryItem from './HistoryItem';
import './History.css';

const History = ({ history, onHistoryItemClick, onClearHistory }) => {
  return (
    <div className="calculator-history">
      <HistoryHeader onClearHistory={onClearHistory} />
      {history.length === 0 ? (
        <div className="history-empty">No calculations yet</div>
      ) : (
        <div className="history-items">
          {history.map((item, index) => (
            <HistoryItem 
              key={index}
              item={item}
              onClick={onHistoryItemClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default History;