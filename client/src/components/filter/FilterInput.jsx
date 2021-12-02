import React from 'react';
import classes from './FilterInput.module.css';

function FilterInput(props) {
  const color = props.color === 'secondary' ? 'secondary' : 'primary';

  return (
    <div>
      <label className={classes.label} htmlFor={props.id}>
        {props.title}
      </label>
      <input
        className={`${classes.input} ${classes[color]}`}
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        list={props.listId || null}
      />
      <span className={classes.icon}>{props.children}</span>
    </div>
  );
}

// {/* <select className={classes.select} name="location" id="location">
//   <option value="Dogus">Dogus</option>
//   <option value="Ali">Ali</option>
//   <option value="Dogus">Dogus</option>
//   <option value="Temizsoy">Temizsoy</option>
// </select> */}

// {
//   props.listId && (
//     <datalist id={props.listId}>
//       {props.options.map(optionVal => {
//         return <option value={optionVal} />;
//       })}
//     </datalist>
//   );
// }

export default FilterInput;
