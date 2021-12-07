import React, { useReducer } from 'react';

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
    name: 'something',
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

const DUMMY_HEADER_DATA = ['Id', 'Name', 'Category', 'Location', 'Price', 'Added In', 'Modified'];

const ProductContext = React.createContext({
  products: DUMMY_DATA,
  headers: DUMMY_HEADER_DATA,
  productAddHandler: () => console.log('default function'),
});

const defaultReducer = {
  products: DUMMY_DATA,
  headers: DUMMY_HEADER_DATA,
};

const productReducer = (prevState, action) => {
  if (action.type === 'ADD') {
    const addedProducts = [...prevState.products];
    addedProducts.unshift(action.payload.data);

    return {
      products: addedProducts,
      headers: prevState.headers,
      productAddHandler: prevState.productAddHandler,
    };
  }
};

export function ProductProvider(props) {
  const [state, dispatch] = useReducer(productReducer, defaultReducer);

  const productAddHandler = data => {
    dispatch({ type: 'ADD', payload: { data } });
  };

  const productContextData = {
    products: state.products,
    headers: state.headers,
    productAddHandler: productAddHandler,
  };

  return <ProductContext.Provider value={productContextData}>{props.children}</ProductContext.Provider>;
}

export default ProductContext;
