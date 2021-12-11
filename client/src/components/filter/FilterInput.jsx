import React from 'react';
import classes from './FilterInput.module.css';

function FilterInput(props) {
  const color = props.color === 'secondary' ? 'secondary' : 'primary';
  const isSelector = props.type === 'select';

  return (
    <div>
      <label className={classes.label} htmlFor={props.id}>
        {props.title}
      </label>
      {!isSelector && (
        <input
          className={`${classes.input} ${classes[color]}`}
          id={props.id}
          type={props.type}
          placeholder={props.placeholder}
          onChange={props.onChange}
          value={props.value}
        />
      )}
      {isSelector && (
        <select className={`${classes.select} ${classes[color]}`} name={props.id} id={props.id}>
          {props.options.map(option => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      )}

      <span className={classes.icon}>{props.children}</span>
    </div>
  );
}

export default FilterInput;
