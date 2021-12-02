import React from 'react';
import { input } from './TableHead.module.css';

function TableHead({ data }) {
  return (
    <tr>
      <td>
        <input type="checkbox" className={input} disabled />
      </td>
      {data.map(header => (
        <td>{header}</td>
      ))}
    </tr>
  );
}

export default TableHead;
