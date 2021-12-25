import { configureStore } from '@reduxjs/toolkit';
import productSlice from './products/products-slice';

const store = configureStore({
  reducer: {
    product: productSlice.reducer,
  },
});

export default store;
