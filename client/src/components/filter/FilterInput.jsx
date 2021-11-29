import React from 'react';
import classes from './FilterInput.module.css';

function FilterInput(props) {
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
        list={props.listId || null}
      />
      <datalist id={props.listId}>
        <option value="Boston" />
        <option value="Cambridge" />
        <option value="Something" />
      </datalist>
    </div>
  );
}

export default FilterInput;
