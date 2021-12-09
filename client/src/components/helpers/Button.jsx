import React from 'react';
import classes from './Button.module.css';

function Button(props) {
  const definedColor = props.color === 'secondary' ? classes.secondary : classes.primary;

  return (
    <button
      onClick={props.onClick}
      className={`${classes.button} ${definedColor}`}
      type={props.type || 'button'}
      disabled={props.disabled}
      {...props}
    >
      {props.children}
      {props.label}
    </button>
  );
}

export default Button;
