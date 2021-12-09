import React, { useContext } from 'react';
import classes from './Product.module.css';
import ProductContext from '../../../store/product-context';

function Product({ data }) {
  const productCtx = useContext(ProductContext);

  const changeHandler = e => {
    productCtx.productChangeHandler(data.id);
  };

  return (
    <tr>
      <td>
        <input id={data.id} className={classes.checkbox} type="checkbox" onChange={changeHandler} />
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
