import React from 'react'
import { NavLink } from 'react-router-dom';
import Friends from './Friend/Friends'
import classes from './Navbar.module.css'

const Navbar = (props) => {

  const state = props.sidebarData;

  return (
    <nav className={classes.navbar}>
      <div className={classes.item}>
        <NavLink to="/profile" activeClassName={classes.active}>Профиль</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/dialogs" activeClassName={classes.active}>Диалоги</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/users" activeClassName={classes.active}>Юзеры</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/news" activeClassName={classes.active}>Новости</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/settings" activeClassName={classes.active}>Настройки</NavLink>
      </div>

      <Friends friends={state.friends} />
    </nav >
  )
}

export default Navbar;

// const Navbar = (props) => {
//   const state = props.store.getState();

//   return (
//     <nav className={classes.navbar}>
//       <div className={classes.item}>
//         <NavLink to="/profile" activeClassName={classes.active}>Профиль</NavLink>
//       </div>
//       <div className={classes.item}>
//         <NavLink to="/dialogs" activeClassName={classes.active}>Диалоги</NavLink>
//       </div>
//       <div className={classes.item}>
//         <NavLink to="/news" activeClassName={classes.active}>Новости</NavLink>
//       </div>
//       <div className={classes.item}>
//         <NavLink to="/settings" activeClassName={classes.active}>Настройки</NavLink>
//       </div>

//       <Friends friends={state.sidebarData.friends} />
//     </nav >
//   )
// }
// ------- old one wtih props -------
