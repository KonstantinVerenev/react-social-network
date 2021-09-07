import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css'

const Header = (props) => {
  return (
    <header className={classes.header}>
      <img src="/img/logo.png" alt="logo" width="50px" />
      <div >
        {props.isAuth ?
          <div><div className={classes.loginLink}>{props.login}</div><button onClick={props.logout}>Logout</button></div>
          : <NavLink className={classes.loginLink} to='/login'>Login</NavLink>}
      </div>
    </header >
  )
}

export default Header;
