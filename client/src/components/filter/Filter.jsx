import React from 'react';
import classes from './Filter.module.css';
import FilterInput from './FilterInput';

function Filter() {
  const options1 = ['Ali', 'Dogus', 'Temizsoy'];
  const options2 = ['Yagmur', 'Temizsoy'];

  return (
    <section className={classes.filter}>
      <h1 className={classes.title}>Filter Products</h1>
      <form className={classes.form}>
        <FilterInput title="Tags" placeholder="Filter By Tag" />
        <FilterInput title="Location" placeholder="All locations" />
        <FilterInput title="Category" placeholder="All categories" />
        <FilterInput
          type="text"
          title="Condition"
          placeholder="All conditions"
          listId="test"
          options={options1}
        />
        <FilterInput
          type="text"
          title="SKU"
          placeholder="All conditions"
          listId="another"
          options={options2}
        />
      </form>
    </section>
  );
}

export default Filter;
