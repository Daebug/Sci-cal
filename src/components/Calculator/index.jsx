import React, { useState, useEffect } from 'react';
import Display from '../Display/index.jsx';
import Keypad from '../Keypad/index.jsx';
import History from '../History/index.jsx';
import { calculate } from '../../utils/calculator';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [memory, setMemory] = useState(0);
  const [history, setHistory] = useState([]);
  const [isDegree, setIsDegree] = useState(true);
  const [notification, setNotification] = useState('');
  
  // Clear notification after a brief time
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification('');
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [notification]);
  
  // Handle keyboard input
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        handleCalculate();
      } else if (e.key === 'Backspace') {
        handleDelete();
      } else if (e.key === 'Escape') {
        handleClear();
      } else if (/[\d+\-*/.()%]/.test(e.key)) {
        handleButtonClick(e.key);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [input]);
  
  const handleButtonClick = (value) => {
    if (notification) {
      setNotification('');
    }
    
    if (result && !/[+\-*/.()%]/.test(value)) {
      setInput(value);
      setResult('');
    } else {
      setInput((prev) => prev + value);
    }
  };
  
  const handleDelete = () => {
    if (notification) {
      setNotification('');
      return;
    }
    
    setInput((prev) => prev.slice(0, -1));
  };
  
  const handleClear = () => {
    setInput('');
    setResult('');
    setNotification('');
  };
  
  const handleCalculate = () => {
    if (!input) return;
    
    try {
      const { result: calculationResult, error } = calculate(input, isDegree);
      
      if (!error) {
        setResult(calculationResult);
        // Only add to history if it's a new calculation
        if (!history.some(item => item.expression === input && item.result === calculationResult)) {
          setHistory((prev) => [{ expression: input, result: calculationResult }, ...prev.slice(0, 19)]);
        }
      } else {
        setResult('Error');
        setNotification('Invalid calculation');
      }
    } catch (err) {
      setResult('Error');
      setNotification('Invalid calculation');
    }
  };
  
  const toggleMode = () => {
    setIsDegree((prev) => !prev);
    
    // Notify user of mode change
    if (isDegree) {
      setNotification('Switched to Radians mode');
    } else {
      setNotification('Switched to Degrees mode');
    }
  };
  
  const handleMemoryOperation = (operation) => {
    switch (operation) {
      case 'MC':
        setMemory(0);
        setNotification('Memory cleared');
        break;
      case 'MR':
        if (memory !== 0) {
          setInput((prev) => prev + memory.toString());
          setNotification('Memory recalled: ' + memory);
        } else {
          setNotification('Memory is empty');
        }
        break;
      case 'M+':
        try {
          const { result: currentValue } = calculate(input || '0', isDegree);
          if (currentValue !== 'Error') {
            const newMemory = memory + parseFloat(currentValue);
            setMemory(newMemory);
            setNotification('Added to memory: ' + newMemory);
          }
        } catch (error) {
          setNotification('Cannot add to memory');
        }
        break;
      case 'M-':
        try {
          const { result: currentValue } = calculate(input || '0', isDegree);
          if (currentValue !== 'Error') {
            const newMemory = memory - parseFloat(currentValue);
            setMemory(newMemory);
            setNotification('Subtracted from memory: ' + newMemory);
          }
        } catch (error) {
          setNotification('Cannot subtract from memory');
        }
        break;
      default:
        break;
    }
  };
  
  const handleHistoryItemClick = (item) => {
    setInput(item.expression);
    setResult(item.result);
    setNotification('Recalled from history');
  };
  
  const handleClearHistory = () => {
    setHistory([]);
    setNotification('History cleared');
  };
  
  return (
    <div className="calculator">
      <div className="calculator-header">
        <div className="calculator-title">Scientific Calculator</div>
      </div>
      
      <Display 
        input={input} 
        result={result} 
        memory={memory} 
        isDegree={isDegree} 
      />
      
      {notification && (
        <div className="notification-bar">
          {notification}
        </div>
      )}
      
      <Keypad 
        onButtonClick={handleButtonClick}
        onMemoryOperation={handleMemoryOperation}
        toggleMode={toggleMode}
        isDegree={isDegree}
        onClear={handleClear}
        onDelete={handleDelete}
        onCalculate={handleCalculate}
      />
      
      <History 
        history={history} 
        onHistoryItemClick={handleHistoryItemClick} 
        onClearHistory={handleClearHistory} 
      />
    </div>
  );
};

export default Calculator;
