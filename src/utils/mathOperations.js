export const deg2rad = (degrees) => {
    return degrees * (Math.PI / 180);
  };
  
  export const applyOperation = (b, a, operator) => {
    switch (operator) {
      case '+': return a + b;
      case '-': return a - b;
      case '*': return a * b;
      case '/': 
        if (b === 0) throw new Error('Division by zero');
        return a / b;
      case '%': 
        if (b === 0) throw new Error('Modulo by zero');
        return a % b;
      case '^': return Math.pow(a, b);
      default: return 0;
    }
  };
  
  export const applyFunction = (func, arg, isDegree) => {
    switch(func) {
      case 'sin':
        return isDegree ? Math.sin(deg2rad(arg)) : Math.sin(arg);
      case 'cos':
        return isDegree ? Math.cos(deg2rad(arg)) : Math.cos(arg);
      case 'tan':
        // Check for invalid angles (90, 270 degrees, etc.)
        if (isDegree && (Math.abs(arg) % 180 === 90)) {
          throw new Error('Invalid angle for tangent');
        }
        return isDegree ? Math.tan(deg2rad(arg)) : Math.tan(arg);
      case 'log':
        if (arg <= 0) throw new Error('Invalid argument for logarithm');
        return Math.log10(arg);
      case 'ln':
        if (arg <= 0) throw new Error('Invalid argument for natural logarithm');
        return Math.log(arg);
      case 'sqrt':
      case '√':
        if (arg < 0) throw new Error('Invalid argument for square root');
        return Math.sqrt(arg);
      default:
        return arg;
    }
  };