// Function to parse and evaluate the expression safely
function safeEval(expression) {
    // This regex matches a simple mathematical expression
    const regex = /^(\d+\.?\d*)([+\-*/])(\d+\.?\d*)$/;
    const match = expression.match(regex);
  
    if (!match) return 'Invalid Expression';
  
    const operand1 = parseFloat(match[1]);
    const operator = match[2];
    const operand2 = parseFloat(match[3]);
  
    switch (operator) {
      case '+': return operand1 + operand2;
      case '-': return operand1 - operand2;
      case '*': return operand1 * operand2;
      case '/': return operand2 !== 0 ? operand1 / operand2 : 'Cannot divide by zero';
      default: return 'Invalid Expression';
    }
  }
  
  document.addEventListener('DOMContentLoaded', (event) => {
    const expressionOutput = document.getElementById('expressionOutput');
    const resultOutput = document.getElementById('resultOutput');
  
    // Function to update the expression field when a button is clicked
    function updateExpression(value) {
      expressionOutput.textContent += value;
    }
  
    // Function to evaluate the expression and update the result field
    function calculateResult() {
      resultOutput.textContent = safeEval(expressionOutput.textContent);
    }
  
    // Function to clear both the expression and result fields
    function clearCalculator() {
      expressionOutput.textContent = '';
      resultOutput.textContent = '';
    }
  
    // Add event listeners to buttons
    document.querySelectorAll('.keys button').forEach(button => {
      button.addEventListener('click', (e) => {
        const buttonValue = e.target.value;
        if (buttonValue === '=') {
          calculateResult();
        } else if (buttonValue === 'Clear') {
          clearCalculator();
        } else {
          updateExpression(buttonValue);
        }
      });
    });
  });
  