import { createSlice } from '@reduxjs/toolkit';
// --------------- Helper functions -------------------
const formatProductData = product => {
  const currentDate = new Date().toLocaleDateString('en');

  return {
    id: Math.random().toFixed(3),
    ...product,
    addedIn: currentDate,
    modified: currentDate,
  };
};
// -----------------------------------------------------

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    headers: [],
    selectedRows: [],
  },
  reducers: {
    dataLoadHandler(state, action) {
      state.products = action.payload.products;
      state.headers = action.payload.headers;
    },

    productAddHandler(state, action) {
      const formattedData = formatProductData(action.payload.data);
      state.products.unshift(formattedData);
    },

    productDeleteHandler(state) {
      state.products = state.products.filter(product => !state.selectedRows.includes(product.id));
    },

    productSelectHandler(state, action) {
      const selectedId = action.payload.id;

      if (state.selectedRows.includes(selectedId)) {
        state.selectedRows = state.selectedRows.filter(rowId => rowId !== selectedId);
      } else {
        state.selectedRows.push(selectedId);
      }
    },

    productEditHandler(state, action) {
      const { data } = action.payload;
      const edittedProduct = state.products.find(product => product.id === data.id);

      // ???
      for (const key in edittedProduct) {
        edittedProduct[key] = data[key];
      }
    },

    productFilterHandler(state, action) {
      const { filterConditions } = action.payload;

      for (const key in filterConditions) {
        if (filterConditions[key] !== '') {
          state.products = state.products.filter(product => {
            return product[key].toLowerCase().includes(filterConditions[key].toLowerCase());
          });
        }
      }
    },

    productClearHandler(state) {
      // fetching data from database again.
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice;
