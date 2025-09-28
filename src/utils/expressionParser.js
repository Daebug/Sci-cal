import { applyOperation, applyFunction } from './mathOperations';

export const getPrecedence = (operator) => {
  if (operator === '+' || operator === '-') return 1;
  if (operator === '*' || operator === '/' || operator === '%') return 2;
  if (operator === '^') return 3;
  return 0;
};

// Function to evaluate an expression using a modified shunting yard algorithm
export const evaluateExpression = (expression, isDegree) => {
  // Replace mathematical constants
  expression = expression.replace(/π/g, Math.PI.toString());
  expression = expression.replace(/e/g, Math.E.toString());
  
  const output = []; // Output queue for numbers and results
  const operators = []; // Stack for operators
  
  let i = 0;
  let expectOperator = false; // Flag to track if we're expecting an operator
  
  // Helper function to get a number from the expression
  const getNumber = () => {
    let start = i;
    let hasDecimal = false;
    
    // Handle negative numbers at the start or after an operator
    if (expression[i] === '-' && (!expectOperator || i === 0 || expression[i-1] === '(')) {
      i++;
    }
    
    while (
      i < expression.length && 
      (
        /[0-9]/.test(expression[i]) || 
        (expression[i] === '.' && !hasDecimal)
      )
    ) {
      if (expression[i] === '.') hasDecimal = true;
      i++;
    }
    
    // Adjust i since we'll increment in the main loop
    i--;
    
    const numStr = expression.substring(start, i + 1);
    if (numStr === '.') throw new Error('Invalid number format');
    
    return parseFloat(numStr);
  };
  
  // Process each character in the expression
  while (i < expression.length) {
    const char = expression[i];
    
    // Handle whitespace
    if (/\s/.test(char)) {
      i++;
      continue;
    }
    
    // Handle numbers
    if (/[0-9]/.test(char) || (char === '-' && (!expectOperator || i === 0 || expression[i-1] === '('))) {
      output.push(getNumber());
      expectOperator = true;
    }
    // Handle functions
    else if (/[a-z]/.test(char)) {
      let funcName = '';
      const start = i;
      
      // Read the function name
      while (i < expression.length && /[a-z]/.test(expression[i])) {
        funcName += expression[i];
        i++;
      }
      
      // Check for opening parenthesis
      if (i < expression.length && expression[i] === '(') {
        // Find the matching closing parenthesis
        let openParenCount = 1;
        i++;
        const argStart = i;
        
        while (i < expression.length && openParenCount > 0) {
          if (expression[i] === '(') openParenCount++;
          else if (expression[i] === ')') openParenCount--;
          i++;
        }
        
        if (openParenCount !== 0) throw new Error(`Mismatched parentheses in ${funcName} function`);
        
        // Extract the argument expression and evaluate it recursively
        const arg = expression.substring(argStart, i - 1);
        const argValue = evaluateExpression(arg, isDegree);
        
        // Apply the function to the argument
        try {
          const result = applyFunction(funcName, argValue, isDegree);
          output.push(result);
        } catch (error) {
          throw new Error(`Error in ${funcName} function: ${error.message}`);
        }
        
        expectOperator = true;
        
        // Adjust i since we've already processed the closing parenthesis
        i--;
      } else {
        throw new Error(`Function ${funcName} requires parentheses`);
      }
    }
    // Handle parentheses
    else if (char === '(') {
      operators.push(char);
      expectOperator = false;
    }
    else if (char === ')') {
      while (operators.length > 0 && operators[operators.length - 1] !== '(') {
        const operator = operators.pop();
        
        if (output.length < 2) {
          throw new Error('Invalid expression: not enough operands for operator ' + operator);
        }
        
        const b = output.pop();
        const a = output.pop();
        
        try {
          output.push(applyOperation(b, a, operator));
        } catch (error) {
          throw new Error(`Error in operation ${a} ${operator} ${b}: ${error.message}`);
        }
      }
      
      // Remove the opening parenthesis
      if (operators.length === 0 || operators[operators.length - 1] !== '(') {
        throw new Error('Mismatched parentheses');
      }
      
      operators.pop();
      expectOperator = true;
    }
    // Handle operators
    else if (['+', '-', '*', '/', '%', '^'].includes(char)) {
      // Special case: if we see a `-` that should be a negative sign rather than subtraction
      if (char === '-' && !expectOperator) {
        output.push(getNumber());
        expectOperator = true;
      } else {
        while (
          operators.length > 0 &&
          operators[operators.length - 1] !== '(' &&
          getPrecedence(operators[operators.length - 1]) >= getPrecedence(char)
        ) {
          const operator = operators.pop();
          
          if (output.length < 2) {
            throw new Error('Invalid expression: not enough operands for operator ' + operator);
          }
          
          const b = output.pop();
          const a = output.pop();
          
          try {
            output.push(applyOperation(b, a, operator));
          } catch (error) {
            throw new Error(`Error in operation ${a} ${operator} ${b}: ${error.message}`);
          }
        }
        
        operators.push(char);
        expectOperator = false;
      }
    }
    // Handle special constants
    else if (char === 'π') {
      output.push(Math.PI);
      expectOperator = true;
    }
    else if (char === 'e') {
      output.push(Math.E);
      expectOperator = true;
    }
    else {
      throw new Error(`Unknown character in expression: ${char}`);
    }
    
    i++;
  }
  
  // Process any remaining operators
  while (operators.length > 0) {
    const operator = operators.pop();
    
    if (operator === '(') {
      throw new Error('Mismatched parentheses');
    }
    
    if (output.length < 2) {
      throw new Error('Invalid expression: not enough operands for operator ' + operator);
    }
    
    const b = output.pop();
    const a = output.pop();
    
    try {
      output.push(applyOperation(b, a, operator));
    } catch (error) {
      throw new Error(`Error in operation ${a} ${operator} ${b}: ${error.message}`);
    }
  }
  
  // The final result should be the only item in the output queue
  if (output.length !== 1) {
    throw new Error('Invalid expression');
  }
  
  return output[0];
};