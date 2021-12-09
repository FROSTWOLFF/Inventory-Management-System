import React from 'react';
import classes from './Input.module.css';

function Input(props) {
  const inputClasses = props.hasError ? `${classes.input} ${classes.invalid}` : classes.input;

  return (
    <div>
      <label className={classes.label} htmlFor={props.id}>
        {props.title}
      </label>
      <input
        className={inputClasses}
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
        {...props}
      />
      <span className={classes.icon}>{props.children}</span>
    </div>
  );
}

export default Input;
