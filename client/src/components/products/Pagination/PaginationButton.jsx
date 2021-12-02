import React from 'react';
import classes from './PaginationButton.module.css';

function PaginationButton(props) {
  const selectedClass = props.selected ? classes.selected : '';

  return (
    <button type={props.type} className={`${classes.button} ${selectedClass}`} {...props}>
      {props.label}
    </button>
  );
}

export default PaginationButton;
