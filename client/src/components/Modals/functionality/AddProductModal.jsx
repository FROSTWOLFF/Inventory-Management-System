import React from 'react';
import Modal from '../Modal.jsx';
import classes from './AddProductModal.module.css';
import Input from '../../helpers/Input.jsx';
import Button from '../../helpers/Button';

function AddProductModal(props) {
  return (
    <Modal onClose={props.onClose}>
      <h1 className={classes.title}>Add product</h1>
      <div className={classes.container}>
        <form>
          <div className={classes.inputs}>
            <Input type="text" placeholder={'Name'} />
            <Input type="text" placeholder={'Category'} />
            <Input type="text" placeholder={'Location'} />
            <Input type="number" placeholder={'Price'} />
          </div>
          <div className={classes.buttons}>
            <Button label={'Cancel'} />
            <Button label={'Add'} color="secondary" />
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default AddProductModal;
