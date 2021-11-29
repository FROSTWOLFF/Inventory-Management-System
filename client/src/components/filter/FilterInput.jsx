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
      {props.listId && (
        <datalist id={props.listId}>
          {props.options.map(optionVal => {
            return <option value={optionVal} />;
          })}
        </datalist>
      )}
    </div>
  );
}

export default FilterInput;
