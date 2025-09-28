# Scientific Calculator

A modern, feature-rich scientific calculator built with React and Vite. This calculator provides both basic arithmetic operations and advanced scientific functions with support for degree/radian modes, memory operations, and calculation history.

## Features

### Core Functionality
- **Basic Operations**: Addition, subtraction, multiplication, division, modulo
- **Scientific Functions**: Trigonometric functions (sin, cos, tan), logarithms (log, ln), square root
- **Power Operations**: Exponentiation with ^ operator
- **Mathematical Constants**: π (pi) and e (Euler's number)

### Advanced Features
- **Angle Modes**: Switch between degrees and radians for trigonometric calculations
- **Memory Operations**: MC (clear), MR (recall), M+ (add), M- (subtract)
- **Calculation History**: View and recall previous calculations
- **Keyboard Support**: Full keyboard input support with shortcuts
- **Error Handling**: Comprehensive error detection and user-friendly notifications

### User Interface
- Clean, modern design with responsive layout
- Real-time display of input expressions and results
- Visual indicators for current mode (degrees/radians)
- Memory status display
- Notification system for user feedback

## Technology Stack

- **Frontend**: React 19.0.0
- **Build Tool**: Vite 6.2.0
- **Styling**: CSS with custom properties
- **Fonts**: Inter font family from Google Fonts
- **Development**: ESLint for code linting

## Project Structure

```
src/
├── components/
│   ├── Calculator/          # Main calculator component
│   ├── Display/             # Expression and result display
│   ├── Keypad/              # Button layout and input handling
│   ├── History/             # Calculation history management
│   ├── MemorySection/       # Memory operations and mode toggle
│   ├── FunctionSection/     # Scientific function buttons
│   ├── ControlSection/      # Clear and delete operations
│   ├── NumberSection/       # Number input buttons
│   ├── OperatorSection/     # Arithmetic operator buttons
│   └── common/              # Reusable components
├── utils/
│   ├── calculator.js        # Main calculation logic
│   ├── expressionParser.js  # Expression parsing and evaluation
│   └── mathOperations.js    # Mathematical operation implementations
├── styles/
│   └── global.css           # Global styles and CSS variables
└── assets/                  # Static assets
```

## Getting Started

### Prerequisites
- Node.js (version compatible with React 19)
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

### Building for Production

Build the project:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

### Code Quality

Run ESLint to check code quality:
```bash
npm run lint
```

## Usage

### Basic Operations
- Click number buttons or use keyboard to input numbers
- Use +, -, *, /, % for basic arithmetic operations
- Press = or Enter to calculate results

### Scientific Functions
- Use function buttons like sin, cos, tan, log, ln, sqrt
- Functions require parentheses: sin(30) or log(100)
- Switch between degrees and radians using the DEG/RAD toggle

### Memory Operations
- **MC**: Clear memory
- **MR**: Recall value from memory
- **M+**: Add current result to memory
- **M-**: Subtract current result from memory

### Keyboard Shortcuts
- **Enter**: Calculate result
- **Escape**: Clear input
- **Backspace**: Delete last character
- **Numbers and operators**: Direct input

### History
- View up to 20 previous calculations
- Click any history item to recall it
- Clear history with the clear button

## Expression Parser

The calculator uses a sophisticated expression parser that:
- Implements the shunting yard algorithm for proper operator precedence
- Handles nested parentheses and function calls
- Supports mathematical constants (π, e)
- Provides detailed error messages for invalid expressions
- Manages negative numbers and unary operators correctly

## Error Handling

The calculator includes comprehensive error handling for:
- Division by zero
- Invalid function arguments (e.g., negative square roots)
- Malformed expressions
- Invalid angles for trigonometric functions
- Arithmetic overflow and underflow

## Browser Support

This calculator is built with modern web technologies and supports all modern browsers that support ES6+ features and React 19.

## License

This project is private and not licensed for public use.
