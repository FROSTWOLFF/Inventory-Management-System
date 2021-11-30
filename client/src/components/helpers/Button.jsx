import React from 'react';
import classes from './Button.module.css';

function Button({ type, label, icon, children, color }) {
  const definedColor = color === 'secondary' ? classes.secondary : classes.primary;

  return (
    <button className={`${classes.button} ${definedColor}`} type={type || 'button'}>
      {children}
      {label}
    </button>
  );
}

export default Button;
