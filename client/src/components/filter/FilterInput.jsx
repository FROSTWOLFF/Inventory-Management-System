import React from 'react';
import classes from './FilterInput.module.css';

function FilterInput(props) {
  const color = props.color === 'secondary' ? 'secondary' : 'primary';

  return (
    <div>
      <label className={classes.label} htmlFor={props.id}>
        {props.title}
      </label>
      <input
        className={`${classes.input} ${classes[color]}`}
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
      />
      <span className={classes.icon}>{props.children}</span>
    </div>
  );
}

export default FilterInput;
