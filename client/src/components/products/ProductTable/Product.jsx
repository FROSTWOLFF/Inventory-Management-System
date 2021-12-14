import React, { useContext, useState } from 'react';
import ProductContext from '../../../store/product-context';
import ProductReadOnly from './ProductType/ProductReadOnly';
import ProductEdittable from './ProductType/ProductEdittable';
import classes from './Product.module.css';
import Button from '../../helpers/Button';
import { AiOutlineEdit } from 'react-icons/ai';
import { TiTickOutline } from 'react-icons/ti';

function Product({ data }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const productCtx = useContext(ProductContext);
  const dataKeys = Object.keys(data);

  const changeHandler = () => {
    productCtx.productSelectHandler(data.id);
  };

  const iconClickHandler = () => {
    setIsEditMode(!isEditMode);
  };

  return (
    <tr className={classes.tableRow}>
      <td>
        <input id={data.id} className={classes.checkbox} type="checkbox" onChange={changeHandler} />
      </td>
      {isEditMode &&
        dataKeys.map(key => <ProductEdittable key={data[key]} type="text" defaultValue={data[key]} />)}

      {!isEditMode && dataKeys.map(key => <ProductReadOnly key={data[key]} label={data[key]} />)}
      <td>
        {isEditMode && (
          <>
            <button className={classes.saveButton}>Save</button>
            <AiOutlineEdit size={19} className={classes.editIcon} onClick={iconClickHandler} />
          </>
        )}
        {!isEditMode && (
          <AiOutlineEdit size={19} className={classes.editIcon} onClick={iconClickHandler} />
        )}
      </td>
    </tr>
  );
}

export default Product;
