import React from 'react';
import classes from './Product.module.css';

function Product({ data }) {
  // const test = ['Dogus', 'Ali', 'Ahmet', 'Mehmet', 'Something', 'Else', 'Another'];

  return (
    <tr>
      <td>
        <input className={classes.checkbox} type="checkbox" />
      </td>
      <td>{data.id}</td>
      <td>{data.name}</td>
      <td>{data.category}</td>
      <td>{data.location}</td>
      <td>{data.price}</td>
      <td>{data.addedIn}</td>
      <td>{data.modified}</td>
    </tr>
  );
}

export default Product;
