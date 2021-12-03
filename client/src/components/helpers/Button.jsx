import React from 'react';
import classes from './Button.module.css';

function Button({ type, label, onClick, children, color }) {
  const definedColor = color === 'secondary' ? classes.secondary : classes.primary;

  return (
    <button onClick={onClick} className={`${classes.button} ${definedColor}`} type={type || 'button'}>
      {children}
      {label}
    </button>
  );
}

export default Button;
