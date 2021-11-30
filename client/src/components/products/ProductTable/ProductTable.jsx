import React from 'react';
import classes from './ProductTable.module.css';

function ProductTable() {
  return (
    <table className={classes.table}>
      <thead>
        <tr>
          <td>
            <input type="checkbox" className={classes.checkbox} />
          </td>
          <td>Id</td>
          <td>Name</td>
          <td>Category</td>
          <td>Location</td>
          <td>Price</td>
          <td>Added In</td>
          <td>Modified</td>
        </tr>
      </thead>
      <tbody>
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
