import { evaluateExpression } from './expressionParser';

// Preprocess the input
export const preprocessExpression = (input) => {
  return input
    .replace(/√/g, 'sqrt')
    .replace(/\^/g, '^');
};

// Format the result for display
export const formatResult = (calculatedResult) => {
  if (typeof calculatedResult !== 'number') {
    return calculatedResult.toString();
  }
  
  if (!Number.isFinite(calculatedResult)) {
    return 'Error';
  }
  
  // Use toFixed for precision but remove trailing zeros
  const precisionStr = calculatedResult.toFixed(10);
  const trimmedStr = precisionStr.replace(/\.?0+$/, '');
  
  // For very large or very small numbers, use scientific notation
  if (Math.abs(calculatedResult) > 1e10 || (Math.abs(calculatedResult) < 1e-10 && calculatedResult !== 0)) {
    return calculatedResult.toExponential(6);
  }
  
  return trimmedStr;
};

// Main calculation function
export const calculate = (input, isDegree) => {
  try {
    if (!input) return { result: '', error: false };
    
    // Preprocess the input
    const processedInput = preprocessExpression(input);
    
    // Evaluate the expression
    const calculatedResult = evaluateExpression(processedInput, isDegree);
    
    // Format the result
    const formattedResult = formatResult(calculatedResult);
    
    return {
      result: formattedResult,
      error: formattedResult === 'Error'
    };
  } catch (error) {
    console.error('Calculation error:', error);
    return { result: 'Error', error: true };
  }
};