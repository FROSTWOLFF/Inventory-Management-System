import React, { useContext, useState } from 'react';
import ProductContext from '../../../store/product-context';
// import AddProductModal from '../../Modals/functionality/AddProductModal';
import EditProductModal from '../../Modals/functionality/EditProductModal';
import classes from './Product.module.css';
import { AiOutlineEdit } from 'react-icons/ai';

function Product({ product }) {
  const [showAddModal, setShowAddModal] = useState(false);

  const showAddModalHandler = () => {
    setShowAddModal(true);
  };

  const hideAddModalHandler = () => {
    setShowAddModal(false);
  };

  const productCtx = useContext(ProductContext);
  // const productKeys = Object.keys(product);

  const selectorChangeHandler = () => {
    productCtx.productSelectHandler(product.id);
  };

  return (
    <tr className={classes.tableRow}>
      {showAddModal && <EditProductModal id={product.id} data={product} onClose={hideAddModalHandler} />}
      <td>
        <input
          id={product.id}
          className={classes.checkbox}
          type="checkbox"
          onChange={selectorChangeHandler}
        />
      </td>
      {Object.keys(product).map(key => (
        <td key={product[key]}>{product[key]}</td>
      ))}
      <td>
        <AiOutlineEdit onClick={showAddModalHandler} size={19} className={classes.editIcon} />
      </td>
    </tr>
  );
}

export default Product;
