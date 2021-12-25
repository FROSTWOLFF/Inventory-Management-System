import React, { useReducer, useEffect, useState } from 'react';
const { db } = window;

const ProductContext = React.createContext({
  products: [],
  headers: [],
  selectedRows: [],
  productAddHandler: () => console.log('Add function'),
  productDeleteHandler: () => console.log('Delete function'),
  productSelectHandler: () => console.log('Select function'),
  productFilterHandler: () => console.log('Filter function'),
  productClearHandler: () => console.log('Clear function'),
  productEditHandler: () => console.log('Edit function'),
});

const defaultReducer = {
  products: [],
  headers: [],
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
  if (action.type === 'LOAD') {
    return {
      ...prevState,
      headers: action.payload.headers,
      products: action.payload.products,
    };
  }

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

  if (action.type === 'SELECT') {
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

  if (action.type === 'EDIT') {
    const { data } = action.payload;
    const productBeingEditted = prevState.products.find(product => product.id === data.id);
    const updatedProduct = { ...productBeingEditted, ...data };
    console.log(updatedProduct);

    const edittedProducts = prevState.products.map(product => {
      if (updatedProduct.id !== product.id) {
        return product;
      }

      return updatedProduct;
    });

    console.log(edittedProducts);

    return {
      ...prevState,
      products: edittedProducts,
    };
  }

  if (action.type === 'FILTER') {
    const { filterConditions } = action.payload;

    let filteredProducts = prevState.products;

    // All/in one version of filtering
    for (const key in filterConditions) {
      if (filterConditions[key] !== '') {
        filteredProducts = filteredProducts.filter(product =>
          product[key].toLowerCase().includes(filterConditions[key].toLowerCase())
        );
      }

      console.log(filteredProducts);
    }

    return {
      ...prevState,
      products: filteredProducts,
    };
  }

  if (action.type === 'CLEAR') {
    return {
      ...prevState,
      products: [],
    };
  }
};

export function ProductProvider(props) {
  const [state, dispatch] = useReducer(productReducer, defaultReducer);
  // const [isLoading, setIsLoading] = useState()

  console.log(state.products);

  useEffect(() => {
    const loadingAllContent = () => {
      const headers = Object.keys(db.getAttributes());

      db.findAll({ raw: true, limit: 5 }).then(products => {
        dispatch({ type: 'LOAD', payload: { products, headers } });
      });
    };

    loadingAllContent();
  }, []);

  const productAddHandler = data => {
    dispatch({ type: 'ADD', payload: { data } });
  };

  const productDeleteHandler = selectedRows => {
    dispatch({ type: 'DELETE', payload: { selectedRows } });
  };

  const productSelectHandler = id => {
    dispatch({ type: 'SELECT', payload: { id } });
  };

  const productEditHandler = data => {
    dispatch({ type: 'EDIT', payload: { data } });
  };

  const productFilterHandler = filterConditions => {
    dispatch({ type: 'FILTER', payload: { filterConditions } });
  };

  const productClearHandler = () => {
    dispatch({ type: 'CLEAR' });
  };

  const productContextData = {
    products: state.products,
    headers: state.headers,
    selectedRows: state.selectedRows,
    productAddHandler,
    productDeleteHandler,
    productSelectHandler,
    productFilterHandler,
    productEditHandler,
    productClearHandler,
  };

  return <ProductContext.Provider value={productContextData}>{props.children}</ProductContext.Provider>;
}

export default ProductContext;
