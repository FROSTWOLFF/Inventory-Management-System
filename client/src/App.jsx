import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchData } from './store/products/products-actions.js';

import Filter from './components/filter/Filter.jsx';
import Nav from './components/nav/Nav.jsx';
import Products from './components/products/Products.jsx';
import classes from './App.module.css';
// import { ProductProvider } from './store/product-context';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    // <ProductProvider>
    <div className={classes.app}>
      <Filter />
      <main className={classes.container}>
        <Nav />
        <Products />
      </main>
    </div>
    // </ProductProvider>
  );
}

export default App;
