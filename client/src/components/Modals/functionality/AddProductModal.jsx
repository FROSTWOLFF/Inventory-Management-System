import React, { useContext } from 'react';
import Modal from '../Modal.jsx';
import classes from './AddProductModal.module.css';
import Input from '../../helpers/Input.jsx';
import Button from '../../helpers/Button';
import ProductContext from '../../../store/product-context.jsx';
import useInput from '../../hooks/useInput';

// Validation functions
const nameValidation = input => input.trim() !== '';
const categoryValidation = input => input.trim() !== '';
const locationValidation = input => input.trim() !== '';
const priceValidation = input => input.trim() !== '';

function AddProductModal(props) {
  const {
    value: nameInput,
    isValid: nameIsValid,
    changeHandler: nameChangeHandler,
    blurHandler: nameBlurHandler,
    hasError: nameHasError,
  } = useInput(nameValidation);

  const {
    value: categoryInput,
    isValid: categoryIsValid,
    changeHandler: categoryChangeHandler,
    blurHandler: categoryBlurHandler,
    hasError: categoryHasError,
  } = useInput(categoryValidation);

  const {
    value: locationInput,
    isValid: locationIsValid,
    changeHandler: locationChangeHandler,
    blurHandler: locationBlurHandler,
    hasError: locationHasError,
  } = useInput(locationValidation);

  const {
    value: priceInput,
    isValid: priceIsValid,
    changeHandler: priceChangeHandler,
    blurHandler: priceBlurHandler,
    hasError: priceHasError,
  } = useInput(priceValidation);

  const productCtx = useContext(ProductContext);
  let isFormValid = false;

  if (nameIsValid && categoryIsValid && locationIsValid && priceIsValid) {
    isFormValid = true;
  }

  const submitHandler = e => {
    e.preventDefault();
    const product = {
      name: nameInput,
      category: categoryInput,
      location: locationInput,
      price: priceInput,
    };

    if (props.type === 'ADD') {
      productCtx.productAddHandler(product);
    }

    if (props.type === 'EDIT') {
      const newProduct = {
        id: props.id,
        ...product,
      };

      console.log(newProduct);
      productCtx.productEditHandler(newProduct);
    }

    props.onClose();
  };

  return (
    <Modal>
      <h1 className={classes.title}>Add product</h1>
      <div className={classes.container}>
        <form onSubmit={submitHandler}>
          <div className={classes.inputs}>
            <Input
              hasError={nameHasError}
              onBlur={nameBlurHandler}
              onChange={nameChangeHandler}
              value={nameInput}
              type="text"
              placeholder={'Name'}
            />
            <Input
              hasError={categoryHasError}
              onBlur={categoryBlurHandler}
              onChange={categoryChangeHandler}
              value={categoryInput}
              type="text"
              placeholder={'Category'}
            />
            <Input
              hasError={locationHasError}
              onBlur={locationBlurHandler}
              onChange={locationChangeHandler}
              value={locationInput}
              type="text"
              placeholder={'Location'}
            />
            <Input
              hasError={priceHasError}
              onBlur={priceBlurHandler}
              onChange={priceChangeHandler}
              value={priceInput}
              type="number"
              placeholder={'Price'}
              step=".01"
            />
          </div>
          <div className={classes.buttons}>
            <Button label={'Cancel'} onClick={props.onClose} />
            <Button type={'submit'} label={'Add'} color="secondary" disabled={!isFormValid} step=".01" />
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default AddProductModal;
