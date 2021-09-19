import React from 'react'
// import classes from './ProfileInfo.module.css'
import classes from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (event) => {
    if (event.target.files.length) {
      props.savePhoto(event.target.files[0])
    }
  }

  return (
    <>
      {/* <div className={classes.profileHeader}>
        <img src="/img/header-img.jpg" alt="header-img" />
      </div> */}

      <div>
        <img className={classes.avatarImg} src={props.profile.photos.large ? props.profile.photos.large : '/img/no-avatar.jpg'} alt='avatar'></img>
        {props.isOwner && <div className={classes.chooseFileBlock}><input type={'file'} onChange={onMainPhotoSelected} /></div>}
        <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus} />
        <h2>Имя: {props.profile.fullName}</h2>
        <h5>Обо мне: {props.profile.aboutMe}</h5>
        <hr />
      </div>
    </>
  )
}

export default ProfileInfo;
