import React from 'react';
import { input } from './TableHead.module.css';
import classes from './TableHead.module.css';

function TableHead({ headers }) {
  return (
    <tr className={classes.tableHead}>
      <th>
        <input type="checkbox" disabled />
      </th>
      {headers.map(header => (
        <th key={header}>{header}</th>
      ))}
    </tr>
  );
}

export default TableHead;
