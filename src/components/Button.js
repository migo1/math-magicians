import React from 'react';
import PropTypes from 'prop-types';
import './buttons.css';

function Button({ btn, handleClick }) {
  if (btn === '÷' || btn === '×' || btn === '-' || btn === '+' || btn === '=') {
    return <button type="button" className="button operators" onClick={handleClick}>{btn}</button>;
  }
  if (btn === '0') {
    return (
      <button
        type="button"
        className="button other-btns zero-btn"
        onClick={handleClick}
      >
        {btn}
      </button>
    );
  }

  return (
    <button type="button" className="button other-btns" onClick={handleClick}>
      {btn}
    </button>
  );
}

Button.propTypes = {
  btn: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
