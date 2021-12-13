import React, { useContext } from 'react';
import ProductContext from '../../../store/product-context';
import classes from './Product.module.css';
import { AiOutlineEdit } from 'react-icons/ai';

function Product({ data }) {
  const productCtx = useContext(ProductContext);

  const changeHandler = () => {
    productCtx.productSelectHandler(data.id);
  };

  return (
    <tr className={classes.tableRow}>
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
      <td className={classes.iconContainer}>
        <AiOutlineEdit size={17} className={classes.editIcon} />
      </td>
    </tr>
  );
}

export default Product;
