import React from 'react';
import PropTypes from 'prop-types';
import './buttons.css';

function Button({ btn }) {
  if (btn === '÷' || btn === '×' || btn === '-' || btn === '+' || btn === '=') {
    return <div className="button operators">{btn}</div>;
  }
  if (btn === '0') {
    return <div className="button other-btns zero-btn">{btn}</div>;
  }

  return <div className="button other-btns">{btn}</div>;
}

Button.propTypes = {
  btn: PropTypes.string.isRequired,
};

export default Button;
