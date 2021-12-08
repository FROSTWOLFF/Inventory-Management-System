import React from 'react';
import classes from './Button.module.css';

function Button({ type, label, onClick, children, color, disabled }) {
  const definedColor = color === 'secondary' ? classes.secondary : classes.primary;

  return (
    <button
      onClick={onClick}
      className={`${classes.button} ${definedColor}`}
      type={type || 'button'}
      disabled={disabled}
    >
      {children}
      {label}
    </button>
  );
}

export default Button;
