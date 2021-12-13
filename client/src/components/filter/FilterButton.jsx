import React from 'react';
import classes from './FilterButton.module.css';

function FilterButton(props) {
  return (
    <button onClick={props.onClick} className={classes.button} type={props.type || 'button'} {...props}>
      {props.label}
    </button>
  );
}

export default FilterButton;
