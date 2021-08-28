import React from 'react'
import classes from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <>
      <div className={classes.profileHeader}>
        <img src="/img/header-img.jpg" alt="header-img" />
      </div>

      <div>
        <img src={props.profile.photos.large ? props.profile.photos.large : '/img/post-avatar.png'} alt='avatar'></img>
        <h1>{props.profile.fullName}</h1>
        <h5>{props.profile.aboutMe}</h5>
        <hr />
      </div>
    </>
  )
}

export default ProfileInfo;
