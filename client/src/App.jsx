import React from 'react';
import Filter from './components/filter/Filter.jsx';
import Nav from './components/nav/Nav.jsx';
import Products from './components/products/Products.jsx';
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.app}>
      <Filter />
      <main className={classes.container}>
        <Nav />
        <Products />
      </main>
    </div>
  );
}

export default App;
