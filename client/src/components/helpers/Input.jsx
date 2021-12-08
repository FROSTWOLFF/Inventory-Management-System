import React from 'react';
import classes from './Input.module.css';

function Input(props) {
  return (
    <div>
      <label className={classes.label} htmlFor={props.id}>
        {props.title}
      </label>
      <input
        className={classes.input}
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.changeHandler}
        value={props.inputValue}
        // list={props.listId || null}
      />
      <span className={classes.icon}>{props.children}</span>
    </div>
  );
}

export default Input;
