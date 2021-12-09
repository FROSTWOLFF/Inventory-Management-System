import React, { useState, useContext } from 'react';
import classes from './Products.module.css';
import Button from '../helpers/Button';
import { BsTrash } from 'react-icons/bs';
import { MdAdd } from 'react-icons/md';
import ProductTable from './ProductTable/ProductTable.jsx';
import Pagination from './Pagination/Pagination.jsx';
import AddProductModal from '../Modals/functionality/AddProductModal';
// import { ProductProvider } from '../../store/product-context';
import ProductContext from '../../store/product-context';

function Products() {
  const productCtx = useContext(ProductContext);
  const [showAddModal, setShowAddModal] = useState(false);

  const showAddModalHandler = () => {
    setShowAddModal(true);
  };

  const hideAddModalHandler = () => {
    setShowAddModal(false);
  };

  return (
    // <ProductProvider>
    <section className={classes.products}>
      {showAddModal && <AddProductModal onClose={hideAddModalHandler} />}
      <div className={classes.buttons}>
        <Button onClick={productCtx.productDeleteHandler} label="Delete">
          <BsTrash />
        </Button>
        <Button onClick={showAddModalHandler} label="Add Product" color="secondary">
          <MdAdd size={20} />
        </Button>
      </div>
      <ProductTable />
      <Pagination />
    </section>
    // </ProductProvider>
  );
}

export default Products;
