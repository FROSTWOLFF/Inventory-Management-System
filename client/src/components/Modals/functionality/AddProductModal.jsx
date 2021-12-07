import React, { useContext } from 'react';
import Modal from '../Modal.jsx';
import classes from './AddProductModal.module.css';
import Input from '../../helpers/Input.jsx';
import Button from '../../helpers/Button';
import ProductContext from '../../../store/product-context.jsx';

const DUMMY_PRODUCT = {
  id: Math.random().toFixed(3),
  name: 'New Product',
  category: 'Action',
  location: 'Izmir',
  price: '82.99',
  addedIn: '01-01-2001',
  modified: '12-01-2001',
};

function AddProductModal(props) {
  const productCtx = useContext(ProductContext);

  const submitHandler = e => {
    e.preventDefault();
    productCtx.productAddHandler(DUMMY_PRODUCT);
  };

  return (
    <Modal onClose={props.onClose}>
      <h1 className={classes.title}>Add product</h1>
      <div className={classes.container}>
        <form onSubmit={submitHandler}>
          <div className={classes.inputs}>
            <Input type="text" placeholder={'Name'} />
            <Input type="text" placeholder={'Category'} />
            <Input type="text" placeholder={'Location'} />
            <Input type="number" placeholder={'Price'} />
          </div>
          <div className={classes.buttons}>
            <Button label={'Cancel'} />
            <Button type={'submit'} label={'Add'} color="secondary" />
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default AddProductModal;
