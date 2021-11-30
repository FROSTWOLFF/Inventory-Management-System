import React from 'react';
import classes from './ProductTable.module.css';

function ProductTable() {
  return (
    <table className={classes.table}>
      <th className={classes.tableHead}>
        <td>
          <input type="checkbox" className={classes.checkbox} />
        </td>
        <td>Name</td>
        <td>Id</td>
        <td>Category</td>
        <td>Location</td>
        <td>Price</td>
        <td>Added In</td>
        <td>Modified</td>
      </th>
      <tbody className={classes.tableBody}>
        <tr>
          <td>
            <input type="checkbox" />
          </td>
          <td>Dogus</td>
          <td>Dogus</td>
          <td>Dogus</td>
          <td>Dogus</td>
          <td>Dogus</td>
          <td>Dogus</td>
          <td>Dogus</td>
        </tr>
      </tbody>
    </table>
  );
}

export default ProductTable;
