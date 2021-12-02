import React from 'react';

function TableHead({ data }) {
  return (
    <tr>
      <td>
        <input type="checkbox" />
      </td>
      {data.map(header => (
        <td>{header}</td>
      ))}
    </tr>
  );
}

export default TableHead;
