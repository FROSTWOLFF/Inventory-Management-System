import React from 'react';
import classes from './ProductTable.module.css';

function ProductTable() {
  return (
    <table className={classes.table}>
      <th>
        <td>Checkbox</td>
        <td>Id</td>
        <td>Location</td>
        <td>Price</td>
        <td>Modified</td>
      </th>
    </table>
  );
}

export default ProductTable;
