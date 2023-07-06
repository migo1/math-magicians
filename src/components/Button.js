import React from 'react';
import PropTypes from 'prop-types';
import './buttons.css';

function Button({ btn, color, handleClick }) {
  const btnClass = `button ${color}`;
  const btnClassZero = `button ${color} zero-btn`;
  return (
    <>
      <button
        type="button"
        className={btn === '0' ? btnClassZero : btnClass}
        onClick={handleClick}
      >
        {btn}
      </button>
    </>
  );
}

Button.propTypes = {
  btn: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  handleClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};

export default Button;
