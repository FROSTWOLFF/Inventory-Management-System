import { productActions } from './products-slice';
const { db } = window;

export const fetchData = () => {
  return async dispatch => {
    try {
      const columnData = await db.getAttributes();
      const products = await db.findAll({ raw: true, limit: 5 });

      dispatch(
        productActions.dataLoadHandler({
          headers: Object.keys(columnData),
          products: products || [],
        })
      );
    } catch (err) {
      console.error(err);
    }
  };
};
