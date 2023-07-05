import React from 'react';
import Button from './Button';
import './calculator.css';

const btnKeys = ['AC', '+/-', '%', '÷', '7', '8', '9', '×', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

function Calculator() {
  return (
    <div className="calculator-container">
      <div className="screen-display">0.</div>
      {btnKeys.map((btnKey) => (<Button key={btnKey} btn={btnKey} />))}
    </div>
  );
}

export default Calculator;
