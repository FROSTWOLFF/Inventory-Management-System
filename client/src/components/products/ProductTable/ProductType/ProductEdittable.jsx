import React from 'react';
import classes from './ProductEdittable.module.css';

function ProductEdittable({ key, type, defaultValue }) {
  return (
    <td>
      <input key={key} className={classes.editInput} type={type} defaultValue={defaultValue} />
    </td>
  );
}

export default ProductEdittable;
