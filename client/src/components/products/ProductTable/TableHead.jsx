import React from 'react';
import { input } from './TableHead.module.css';
import classes from './TableHead.module.css';

function TableHead({ data }) {
  return (
    <tr className={classes.tableHead}>
      <td>
        <input type="checkbox" className={input} disabled />
      </td>
      {data.map(header => (
        <td key={header}>{header}</td>
      ))}
    </tr>
  );
}

export default TableHead;
