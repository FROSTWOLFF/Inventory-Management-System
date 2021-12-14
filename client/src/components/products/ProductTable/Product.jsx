import React, { useContext } from 'react';
import ProductContext from '../../../store/product-context';
import classes from './Product.module.css';
import { AiOutlineEdit } from 'react-icons/ai';

function Product({ product }) {
  const productCtx = useContext(ProductContext);
  const productKeys = Object.keys(product);

  const selectorChangeHandler = () => {
    productCtx.productSelectHandler(product.id);
  };

  return (
    <tr className={classes.tableRow}>
      <td>
        <input
          id={product.id}
          className={classes.checkbox}
          type="checkbox"
          onChange={selectorChangeHandler}
        />
      </td>
      {productKeys.map(key => (
        <td key={product[key]}>{product[key]}</td>
      ))}
      <td>
        <AiOutlineEdit size={19} className={classes.editIcon} />
      </td>
    </tr>
  );
}

export default Product;
