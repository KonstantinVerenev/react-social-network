import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './User.module.css'

const User = (props) => {
  return (
    <div className={classes.user}>
      <div className={classes.avatarBox}>
        <NavLink to={`/profile/${props.user.id}`}>
          <img src={props.user.photos.small == null ? '/img/post-avatar.png' : props.user.photos.small} alt="" />
        </NavLink>
        {props.user.followed ?
          <button disabled={props.isFollowingProgress.some(id => id === props.user.id)} onClick={() => {

            props.unfollow(props.user.id)

            // props.setFollowingProgress(true, props.user.id)
            // userAPI.unfollow(props.user.id).then(data => {
            //   if (data.resultCode === 0) {
            //     props.unfollow(props.user.id)
            //   }
            //   props.setFollowingProgress(false, props.user.id)
            // })

          }}>Unfollow</button>
          : <button disabled={props.isFollowingProgress.some(id => id === props.user.id)} onClick={() => {

            props.follow(props.user.id)

            // props.setFollowingProgress(true, props.user.id)
            // userAPI.follow(props.user.id).then(data => {
            //   if (data.resultCode === 0) {
            //     props.follow(props.user.id)
            //   }
            //   props.setFollowingProgress(false, props.user.id)
            // })

          }}>Follow</button>}
      </div>
      <div>
        <div>
          {props.user.name}
        </div>
        <div>
          {props.user.status}
        </div>
      </div>
      <div className={classes.location}>
        <div>
          {'props.user.location.city'}
        </div>
        <div>
          {'props.user.location.country'}
        </div>
      </div>
    </div >
  )
}

export default User;
