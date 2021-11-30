import React from 'react';
import classes from './Nav.module.css';

function Nav() {
  return (
    <nav className={classes.nav}>
      <div className={classes.routes}>
        <div className={classes.route}>Dashboard</div>
        <div className={`${classes.route} ${classes.selected}`}>Products</div>
        <div className={classes.route}>Warehouse</div>
        <div className={classes.route}>Orders</div>
      </div>
      <div className={classes.user}>Username</div>
    </nav>
  );
}

export default Nav;
