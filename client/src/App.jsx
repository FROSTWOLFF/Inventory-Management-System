import React from 'react';
import Filter from './components/filter/Filter';
import Nav from './components/nav/Nav';
import Products from './components/products/Products';
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.app}>
      <Nav />
      <Filter />
      <Products />
    </div>
  );
}

export default App;
