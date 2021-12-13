import React, { useContext } from 'react';
import classes from './Filter.module.css';
import FilterInput from './FilterInput.jsx';
import FilterButton from './FilterButton.jsx';
import IconSearch from '../icons/IconSearch';
import useInput from '../hooks/useInput';
import ProductContext from '../../store/product-context';

const DUMMY_OPTIONS_ANIMALS = [
  {
    value: 'horror',
    label: 'Horror',
  },
  {
    value: 'action',
    label: 'Action',
  },
  {
    value: 'comedy',
    label: 'Comedy',
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
  const {
    value: searchValue,
    changeHandler: searchChangeHandler,
    reset: searchReset,
  } = useInput(() => {});
  const { value: idValue, changeHandler: idChangeHandler, reset: idReset } = useInput(() => {});
  const {
    value: categoryValue,
    changeHandler: categoryChangeHandler,
    reset: categoryReset,
  } = useInput(() => {});
  const {
    value: locationValue,
    changeHandler: locationChangeHandler,
    reset: locationReset,
  } = useInput(() => {});
  const { value: priceValue, changeHandler: priceChangeHandler, reset: priceReset } = useInput(() => {});

  const submitHandler = e => {
    e.preventDefault();

    const filterConditions = {
      name: searchValue,
      id: idValue,
      category: categoryValue,
      location: locationValue,
      price: priceValue,
    };

    productCtx.productFilterHandler(filterConditions);
  };

  const clearHandler = () => {
    productCtx.productClearHandler();

    searchReset();
    idReset();
    categoryReset();
    locationReset();
    priceReset();
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

          <FilterInput
            onChange={idChangeHandler}
            value={idValue}
            title="ID"
            placeholder="Search By Id"
          ></FilterInput>

          <FilterInput
            onChange={categoryChangeHandler}
            value={categoryValue}
            type="select"
            options={DUMMY_OPTIONS_ANIMALS}
            title="Category"
            placeholder="All categories"
          />

          <FilterInput
            onChange={locationChangeHandler}
            value={locationValue}
            type="select"
            options={DUMMY_OPTIONS_LOCATIONS}
            title="Location"
            placeholder="All locations"
          />

          <FilterInput
            onChange={priceChangeHandler}
            value={priceValue}
            type="number"
            title="Price"
            step=".01"
            placeholder="All prices"
          />
        </div>
        <div className={classes.buttons}>
          <FilterButton label="Clear filter" onClick={clearHandler} />
          <FilterButton type="submit" label="Apply filter" />
        </div>
      </form>
    </section>
  );
}

export default Filter;
