import React, { useContext, useState } from 'react';
import classes from './ProductTable.module.css';
import Product from './Product.jsx';
import TableHead from './TableHead.jsx';
import ProductContext from '../../../store/product-context';

function ProductTable() {
  const productCtx = useContext(ProductContext);

  const submitHandler = e => {
    e.preventDefault();
    console.log('form submitted');
  };

  return (
    <form onSubmit={submitHandler}>
      <table className={classes.table}>
        <thead>
          <TableHead data={productCtx.headers} />
        </thead>
        <tbody>
          {productCtx.products.map(product => {
            return <Product key={product.id} data={product} />;
          })}
        </tbody>
      </table>
    </form>
  );
}

export default ProductTable;
