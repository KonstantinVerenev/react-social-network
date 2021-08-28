import React from 'react'
import classes from './Preloader.module.css'
import preloader from '../../../assets/images/preloader.svg'

const Preloader = (props) => {
  return (
    <img className={classes.preloader} src={preloader} alt='preloader' />
  )
}

export default Preloader;
