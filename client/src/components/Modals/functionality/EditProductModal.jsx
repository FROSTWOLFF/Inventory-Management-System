import React, { useContext } from 'react';
import Input from '../../helpers/Input.jsx';
import Button from '../../helpers/Button.jsx';
import Modal from '../Modal.jsx';
import ProductContext from '../../../store/product-context.jsx';
import useSimpleInput from '../../hooks/useSimpleInput.js';
import classes from './EditProductModal.module.css';

function EditProductModal(props) {
  const { id, name, category, location, price } = props.data;
  const { value: nameInput, changeHandler: nameChangeHandler } = useSimpleInput(name);
  const { value: categoryInput, changeHandler: categoryChangeHandler } = useSimpleInput(category);
  const { value: locationInput, changeHandler: locationChangeHandler } = useSimpleInput(location);
  const { value: priceInput, changeHandler: priceChangeHandler } = useSimpleInput(price);

  const productCtx = useContext(ProductContext);

  const submitHandler = () => {
    const product = {
      id,
      name: nameInput,
      category: categoryInput,
      location: locationInput,
      price: priceInput,
      modified: new Date().toLocaleDateString('en'),
    };

    productCtx.productEditHandler(product);
    props.onClose();
  };

  return (
    <Modal>
      <h1 className={classes.title}>Edit product</h1>
      <div className={classes.container}>
        <form onSubmit={submitHandler}>
          <div className={classes.inputs}>
            <Input onChange={nameChangeHandler} value={nameInput} type="text" placeholder={'Name'} />
            <Input
              onChange={categoryChangeHandler}
              value={categoryInput}
              type="text"
              placeholder={'Category'}
            />
            <Input
              onChange={locationChangeHandler}
              value={locationInput}
              type="text"
              placeholder={'Location'}
            />
            <Input
              onChange={priceChangeHandler}
              value={priceInput}
              type="number"
              placeholder={'Price'}
              step=".01"
            />
          </div>
          <div className={classes.buttons}>
            <Button label={'Cancel'} onClick={props.onClose} />
            <Button type={'submit'} label={'Edit'} color="secondary" step=".01" />
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default EditProductModal;
