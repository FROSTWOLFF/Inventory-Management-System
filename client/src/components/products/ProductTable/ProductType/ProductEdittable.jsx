import React from 'react';
import classes from './ProductEdittable.module.css';

function ProductEdittable({ type, defaultValue }) {
  return (
    <td>
      <input className={classes.editInput} type={type} defaultValue={defaultValue} />
    </td>
  );
}

export default ProductEdittable;
