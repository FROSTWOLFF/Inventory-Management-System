import React, { useReducer } from 'react';

// /////////////////DUMMY DATA
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
// /////////////////DUMMY DATA

const ProductContext = React.createContext({
  products: DUMMY_DATA,
  headers: DUMMY_HEADER_DATA,
  selectedRows: [],
  productAddHandler: () => console.log('add function'),
  productDeleteHandler: () => console.log('delete function'),
  productChangeHandler: () => console.log('change function'),
});

const defaultReducer = {
  products: DUMMY_DATA,
  headers: DUMMY_HEADER_DATA,
  selectedRows: [],
};

const formatProductData = product => {
  const currentDate = new Date().toLocaleDateString('en');

  return {
    id: Math.random().toFixed(3),
    ...product,
    addedIn: currentDate,
    modified: currentDate,
  };
};

const productReducer = (prevState, action) => {
  if (action.type === 'ADD') {
    const formattedData = formatProductData(action.payload.data);
    const addedProducts = [...prevState.products];

    addedProducts.unshift(formattedData);

    return {
      ...prevState,
      products: addedProducts,
    };
  }

  if (action.type === 'DELETE') {
    const notDeletedProducts = prevState.products.filter(
      product => !prevState.selectedRows.includes(product.id)
    );

    return {
      ...prevState,
      products: notDeletedProducts,
    };
  }

  if (action.type === 'CHANGE') {
    const selectedId = action.payload.id;
    let allSelectedRowIds = [...prevState.selectedRows];

    // To add or remove specified id to selectedRows
    if (allSelectedRowIds.includes(selectedId)) {
      allSelectedRowIds = allSelectedRowIds.filter(id => id !== selectedId);
    } else {
      allSelectedRowIds.push(selectedId);
    }

    return {
      ...prevState,
      selectedRows: allSelectedRowIds,
    };
  }
};

export function ProductProvider(props) {
  const [state, dispatch] = useReducer(productReducer, defaultReducer);

  const productAddHandler = data => {
    dispatch({ type: 'ADD', payload: { data } });
  };

  const productDeleteHandler = selectedRows => {
    dispatch({ type: 'DELETE', payload: { selectedRows } });
  };

  const productChangeHandler = id => {
    dispatch({ type: 'CHANGE', payload: { id } });
  };

  const productContextData = {
    products: state.products,
    headers: state.headers,
    selectedRows: state.selectedRows,
    productAddHandler,
    productDeleteHandler,
    productChangeHandler,
  };

  return <ProductContext.Provider value={productContextData}>{props.children}</ProductContext.Provider>;
}

export default ProductContext;
