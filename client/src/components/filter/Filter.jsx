import React, { useContext } from 'react';
import classes from './Filter.module.css';
import FilterInput from './FilterInput.jsx';
import FilterButton from './FilterButton.jsx';
import IconSearch from '../icons/IconSearch';
import useInput from '../hooks/useInput';
import ProductContext from '../../store/product-context';

function Filter() {
  const productCtx = useContext(ProductContext);
  const { value: searchValue, changeHandler: searchChangeHandler } = useInput(() => {});

  const submitHandler = e => {
    e.preventDefault();
    console.log('form submitted ', searchValue);
    productCtx.productFilterHandler({ search: searchValue });
  };

  return (
    <section className={classes.filter}>
      <h1 className={classes.title}>Filter Products</h1>
      <form onSubmit={submitHandler} className={classes.form}>
        <div>
          <FilterInput
            onChange={searchChangeHandler}
            value={searchValue}
            color="secondary"
            placeholder="Search by name"
          >
            <IconSearch />
          </FilterInput>
          <FilterInput title="Tags" placeholder="Filter By Tag" />
          <FilterInput title="Location" placeholder="All locations" />
          <FilterInput title="Category" placeholder="All categories" />
          <FilterInput type="text" title="Condition" placeholder="All conditions" />
          <FilterInput type="select" title="SKU" placeholder="All conditions" listId="another" />
        </div>
        <div className={classes.buttons}>
          <FilterButton label="Clear filter" disabled />
          <FilterButton type="submit" label="Apply filter" />
        </div>
      </form>
    </section>
  );
}

export default Filter;
