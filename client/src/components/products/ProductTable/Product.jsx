import React, { useContext, useState } from 'react';
import ProductContext from '../../../store/product-context';
import classes from './Product.module.css';
import { AiOutlineEdit } from 'react-icons/ai';

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
      {isEditMode && (
        <>
          {dataKeys.map(key => (
            <td>
              <input
                key={data[key]}
                className={classes.editInput}
                type="text"
                defaultValue={data[key]}
              />
            </td>
          ))}
        </>
      )}
      {!isEditMode && (
        <>
          {dataKeys.map(key => (
            <td key={data[key]}>{data[key]}</td>
          ))}
        </>
      )}

      <td>
        <AiOutlineEdit size={17} className={classes.editIcon} onClick={iconClickHandler} />
      </td>
    </tr>
  );
}

export default Product;
