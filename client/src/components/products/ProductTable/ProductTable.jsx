import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import classes from './ProductTable.module.css';
import Product from './Product.jsx';
import TableHead from './TableHead.jsx';
import ProductContext from '../../../store/product-context';

function ProductTable() {
  const products = useSelector(state => state.product.products);
  const headers = useSelector(state => state.product.headers);

  // const productCtx = useContext(ProductContext);

  return (
    <table className={classes.table}>
      <thead>
        <TableHead headers={headers} />
      </thead>
      <tbody>
        {products.map(product => {
          return <Product key={product.id} product={product} />;
        })}
      </tbody>
    </table>
  );
}

export default ProductTable;
