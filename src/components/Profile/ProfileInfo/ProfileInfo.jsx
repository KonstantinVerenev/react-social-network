import React, { useState } from 'react'
// import classes from './ProfileInfo.module.css'
import classes from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import ProfileDataReduxForm from './ProfileDataForm'

const ProfileInfo = (props) => {

  let [statusEditMode, setStatusEditMode] = useState(false)

  if (!props.profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (event) => {
    if (event.target.files.length) {
      props.savePhoto(event.target.files[0])
    }
  }

  const Contact = ({ contactTitle, contactValue }) => {
    return (
      <div>
        <h5>{contactTitle} : {contactValue}</h5>
      </div>
    )
  }

  const ProfileData = (props) => {
    return (

      <div className={classes.profileData}>
        {props.isOwner &&
          <button onClick={() => { props.setStatusEditMode(true) }}>edit</button>
        }

        <h2>Имя: {props.profile.fullName}</h2>
        <h3>Обо мне: {props.profile.aboutMe}</h3>

        <h5>
          В поисках работы: {props.profile.lookingForAJob ? 'Да' : 'Нет'}
        </h5>
        {props.profile.lookingForAJob &&
          <h5>
            Какую работу: {props.profile.lookingForAJobDescription}
          </h5>
        }

        <h4>
          Контакты: {Object.keys(props.profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
            // return props.profile.contacts[key]
          })}
        </h4>


      </div>
    )
  }

  const onSubmit = (formData) => {
    props.saveProfile(formData).then(() => {
      setStatusEditMode(false)
    })
  }

  return (
    <>
      {/* <div className={classes.profileHeader}>
        <img src="/img/header-img.jpg" alt="header-img" />
      </div> */}

      <div>
        <div className={classes.profileInfoHeader}>
          <div>
            <img className={classes.avatarImg} src={props.profile.photos.large ? props.profile.photos.large : '/img/no-avatar.jpg'} alt='avatar'></img>
            {props.isOwner && <div className={classes.chooseFileBlock}><input type={'file'} onChange={onMainPhotoSelected} /></div>}
          </div>

          <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus} />
        </div>
        <hr />

        {statusEditMode ? <ProfileDataReduxForm initialValues={props.profile} onSubmit={onSubmit} /> :
          <ProfileData profile={props.profile} isOwner={props.isOwner} setStatusEditMode={setStatusEditMode} />}

        <hr />
      </div>
    </>
  )
}

export default ProfileInfo;
