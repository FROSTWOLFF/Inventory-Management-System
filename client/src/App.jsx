import React from 'react';
import Filter from './components/filter/Filter.jsx';
import Nav from './components/nav/Nav.jsx';
import Products from './components/products/Products.jsx';
import classes from './App.module.css';
import { ProductProvider } from './store/product-context';

// const getProducts = async () => {
//   const products = await window.db.findAll();

//   console.log(products);
// };

// const createProduct = async () => {
//   await window.db.createProduct({
//     name: 'Fight',
//     category: 'Action',
//     location: 'Izmir',
//     price: '82.99',
//     addedIn: '01/01/2001',
//     modified: '12/01/2001',
//   });
// };
// createProduct();
// getProducts();

function App() {
  return (
    <ProductProvider>
      <div className={classes.app}>
        <Filter />
        <main className={classes.container}>
          <Nav />
          <Products />
        </main>
      </div>
    </ProductProvider>
  );
}

export default App;
