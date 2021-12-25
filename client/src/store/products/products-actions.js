import { productActions } from './products-slice';
const { db } = window;

export const fetchData = () => {
  return async dispatch => {
    try {
      const headers = Object.keys(db.getAttributes());
      const products = await db.findAll({ raw: true, limit: 5 });

      dispatch(productActions.dataLoadHandler({ headers, products: products || [] }));
    } catch (err) {
      console.err(err);
    }
  };
};
