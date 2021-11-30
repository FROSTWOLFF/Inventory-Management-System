import React from 'react';
import classes from './Products.module.css';
import Button from '../helpers/Button';
import { BsTrash } from 'react-icons/bs';
import { MdAdd } from 'react-icons/md';
import ProductTable from './ProductTable/ProductTable.jsx';

function Products() {
  return (
    <section className={classes.products}>
      <div className={classes.buttons}>
        <Button label="Delete">
          <BsTrash />
        </Button>
        <Button label="Add Product" color="secondary">
          <MdAdd size={20} />
        </Button>
      </div>
      <ProductTable />
    </section>
  );
}

export default Products;
