import React from 'react';

const HistoryItem = ({ item, onClick }) => {
  // Format expressions for better readability
  const formattedExpression = item.expression
    .replace(/\*/g, '×')
    .replace(/\//g, '÷');
  
  return (
    <div 
      className="history-item"
      onClick={() => onClick(item)}
      tabIndex="0"
      role="button"
      aria-label={`Use previous calculation: ${formattedExpression} equals ${item.result}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick(item);
        }
      }}
    >
      <div className="history-expression">{formattedExpression}</div>
      <div className="history-result">{item.result}</div>
    </div>
  );
};

export default HistoryItem;