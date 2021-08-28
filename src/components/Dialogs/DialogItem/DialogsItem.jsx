import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from './DialogsItem.module.css'

const DialogItem = (props) => {
  let path = `/dialogs/${props.id}`

  return (
    <NavLink to={path} className={classes.dialogItem} activeClassName={classes.active} >
      {props.name}
    </NavLink >
  )
}

export default DialogItem;
