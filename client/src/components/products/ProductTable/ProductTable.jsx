import React, { useContext } from 'react';
import classes from './ProductTable.module.css';
import Product from './Product.jsx';
import TableHead from './TableHead.jsx';
import ProductContext from '../../../store/product-context';

function ProductTable() {
  const productCtx = useContext(ProductContext);
  console.log(productCtx);

  return (
    <table className={classes.table}>
      <thead>
        <TableHead data={productCtx.headers} />
      </thead>
      <tbody>
        {productCtx.products.map(product => {
          return <Product data={product} />;
        })}
      </tbody>
    </table>
  );
}

export default ProductTable;
