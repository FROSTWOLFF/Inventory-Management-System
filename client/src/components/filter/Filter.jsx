import React, { useContext } from 'react';
import classes from './Filter.module.css';
import FilterInput from './FilterInput.jsx';
import FilterButton from './FilterButton.jsx';
import IconSearch from '../icons/IconSearch';
import useInput from '../hooks/useInput';
import ProductContext from '../../store/product-context';

const DUMMY_OPTIONS_ANIMALS = [
  {
    value: 'dog',
    label: 'Dog',
  },
  {
    value: 'cat',
    label: 'Cat',
  },
  {
    value: 'bird',
    label: 'Bird',
  },
];

const DUMMY_OPTIONS_LOCATIONS = [
  {
    value: 'istanbul',
    label: 'Istanbul',
  },
  {
    value: 'ankara',
    label: 'Ankara',
  },
  {
    value: 'izmir',
    label: 'Izmir',
  },
];

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

          <FilterInput title="ID" placeholder="Search By Id"></FilterInput>

          <FilterInput
            type="select"
            options={DUMMY_OPTIONS_ANIMALS}
            title="Category"
            placeholder="All categories"
          />

          <FilterInput
            type="select"
            options={DUMMY_OPTIONS_LOCATIONS}
            title="Location"
            placeholder="All locations"
          />

          <FilterInput type="number" title="Price" placeholder="All prices" />
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
