import React from 'react';
import classes from './ProductTable.module.css';
import Product from './Product.jsx';
import TableHead from './TableHead.jsx';

const DUMMY_DATA = [
  {
    id: Math.random().toFixed(3),
    name: 'Mac',
    category: 'Horror',
    location: 'Ankara',
    price: '52.99',
    addedIn: '19-01-2001',
    modified: '01-01-2001',
  },
  {
    id: Math.random().toFixed(3),
    name: 'Laugh',
    category: 'Comedy',
    location: 'Istanbul',
    price: '32.99',
    addedIn: '14-01-2001',
    modified: '01-01-2001',
  },
  {
    id: Math.random().toFixed(3),
    name: 'Fight',
    category: 'Action',
    location: 'Izmir',
    price: '82.99',
    addedIn: '01-01-2001',
    modified: '12-01-2001',
  },
  {
    id: Math.random().toFixed(3),
    name: 'Fight',
    category: 'Action',
    location: 'Izmir',
    price: '82.99',
    addedIn: '01-01-2001',
    modified: '12-01-2001',
  },
  {
    id: Math.random().toFixed(3),
    name: 'Fight',
    category: 'Action',
    location: 'Izmir',
    price: '82.99',
    addedIn: '01-01-2001',
    modified: '12-01-2001',
  },
  {
    id: Math.random().toFixed(3),
    name: 'Fight',
    category: 'Action',
    location: 'Izmir',
    price: '82.99',
    addedIn: '01-01-2001',
    modified: '12-01-2001',
  },
  {
    id: Math.random().toFixed(3),
    name: 'Fight',
    category: 'Action',
    location: 'Izmir',
    price: '82.99',
    addedIn: '01-01-2001',
    modified: '12-01-2001',
  },
  {
    id: Math.random().toFixed(3),
    name: 'Fight',
    category: 'Action',
    location: 'Izmir',
    price: '82.99',
    addedIn: '01-01-2001',
    modified: '12-01-2001',
  },
  {
    id: Math.random().toFixed(3),
    name: 'Fight',
    category: 'Action',
    location: 'Izmir',
    price: '82.99',
    addedIn: '01-01-2001',
    modified: '12-01-2001',
  },
  {
    id: Math.random().toFixed(3),
    name: 'Fight',
    category: 'Action',
    location: 'Izmir',
    price: '82.99',
    addedIn: '01-01-2001',
    modified: '12-01-2001',
  },
];

const HEADER_DATA = ['Id', 'Name', 'Category', 'Location', 'Price', 'Added In', 'Modified'];

function ProductTable() {
  return (
    <table className={classes.table}>
      <thead>
        <TableHead data={HEADER_DATA} />
      </thead>
      <tbody>
        {DUMMY_DATA.map(product => {
          return <Product data={product} />;
        })}
      </tbody>
    </table>
  );
}

export default ProductTable;
