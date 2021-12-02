import React from 'react';
import classes from './PaginationButton.module.css';

function PaginationButton({ label }) {
  return <button className={classes.button}>{label}</button>;
}

export default PaginationButton;
