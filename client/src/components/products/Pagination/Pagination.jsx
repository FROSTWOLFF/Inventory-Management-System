import React from 'react';
import classes from './Pagination.module.css';
import PaginationButton from './PaginationButton.jsx';

function Pagination() {
  return (
    <div className={classes.pagination}>
      <PaginationButton label="First" />
      <PaginationButton label="Previous" />
      <PaginationButton label="1" />
      <PaginationButton label="2" />
      <PaginationButton label="3" />
      <PaginationButton label="4" />
      <PaginationButton label="Next" />
      <PaginationButton label="Last" />
    </div>
  );
}

export default Pagination;
