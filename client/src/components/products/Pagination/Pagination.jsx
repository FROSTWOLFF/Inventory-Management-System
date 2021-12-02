import React from 'react';
import classes from './Pagination.module.css';
import PaginationButton from './PaginationButton.jsx';

function Pagination() {
  return (
    <div className={classes.pagination}>
      <PaginationButton label="First" disabled />
      <PaginationButton label="Previous" disabled />
      <PaginationButton label="1" selected={true} />
      <PaginationButton label="2" />
      <PaginationButton label="3" />
      <PaginationButton label="4" />
      <PaginationButton label="Next" />
      <PaginationButton label="Last" />
    </div>
  );
}

export default Pagination;
