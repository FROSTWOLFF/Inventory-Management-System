import React from 'react';
import classes from './Filter.module.css';
import FilterInput from './FilterInput.jsx';
import FilterButton from './FilterButton.jsx';
import FilterSearch from './FilterSearch';

function Filter() {
  const options1 = ['Ali', 'Dogus', 'Temizsoy'];
  const options2 = ['Yagmur', 'Temizsoy'];

  return (
    <section className={classes.filter}>
      <h1 className={classes.title}>Filter Products</h1>
      <form className={classes.form}>
        <div className={classes.inputs}>
          <FilterSearch />
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
            type="select"
            title="SKU"
            placeholder="All conditions"
            listId="another"
            options={options2}
          />
        </div>
        <div className={classes.buttons}>
          <FilterButton label="Clear filter" disabled />
          <FilterButton label="Apply filter" />
        </div>
      </form>
    </section>
  );
}

export default Filter;
