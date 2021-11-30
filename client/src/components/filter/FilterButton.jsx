import React from 'react';
import classes from './FilterButton.module.css';

function FilterButton(props) {
  return (
    <button className={classes.button} type={props.type || 'submit'} {...props}>
      {props.label}
    </button>
  );
}

export default FilterButton;
