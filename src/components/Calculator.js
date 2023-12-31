import React, { useState } from 'react';
import Button from './Button';
import './calculator.css';
import caclulate from '../logic/calculate';

const btnKeys = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

function Calculator() {
  const [state, setState] = useState({ total: null, next: null, operation: null });

  const { total, next, operation } = state;

  const handleClick = (e) => {
    const btnValue = e.target.innerHTML;
    setState(caclulate(state, btnValue));
  };
  return (
    <div className="calc-wrapper">
      <h2 className="calc-title">Let`s do some math!</h2>
      <div className="calculator-container">
        <div className="screen-display">{ next || operation || total || 0 }</div>
        {btnKeys.map((btnKey) => (
          btnKey === '÷' || btnKey === 'x' || btnKey === '-' || btnKey === '+' || btnKey === '=' ? (
            <Button key={btnKey} btn={btnKey} color="operators" handleClick={handleClick} />) : (
              <Button key={btnKey} btn={btnKey} color="other-btns" handleClick={handleClick} />
          )
        ))}
      </div>
    </div>
  );
}

export default Calculator;
