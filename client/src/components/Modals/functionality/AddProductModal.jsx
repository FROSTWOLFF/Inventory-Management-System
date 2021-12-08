import React, { useContext } from 'react';
import Modal from '../Modal.jsx';
import classes from './AddProductModal.module.css';
import Input from '../../helpers/Input.jsx';
import Button from '../../helpers/Button';
import ProductContext from '../../../store/product-context.jsx';
import useInput from '../../hooks/useInput';

function AddProductModal(props) {
  const { value: nameInput, changeHandler: nameChangeHandler } = useInput();
  const { value: categoryInput, changeHandler: categoryChangeHandler } = useInput();
  const { value: locationInput, changeHandler: locationChangeHandler } = useInput();
  const { value: priceInput, changeHandler: priceChangeHandler } = useInput();

  const productCtx = useContext(ProductContext);

  const submitHandler = e => {
    e.preventDefault();
    productCtx.productAddHandler({
      name: nameInput,
      category: categoryInput,
      location: locationInput,
      price: priceInput,
    });
  };

  return (
    <Modal onClose={props.onClose}>
      <h1 className={classes.title}>Add product</h1>
      <div className={classes.container}>
        <form onSubmit={submitHandler}>
          <div className={classes.inputs}>
            <Input
              changeHandler={nameChangeHandler}
              inputValue={nameInput}
              type="text"
              placeholder={'Name'}
            />
            <Input
              changeHandler={categoryChangeHandler}
              inputValue={categoryInput}
              type="text"
              placeholder={'Category'}
            />
            <Input
              changeHandler={locationChangeHandler}
              inputValue={locationInput}
              type="text"
              placeholder={'Location'}
            />
            <Input
              changeHandler={priceChangeHandler}
              inputValue={priceInput}
              type="number"
              placeholder={'Price'}
            />
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
