import React from 'react'

import classes from './Friends.module.css'

const Friends = (props) => {

  const friendsElements = props.friends.map(element => {
    return (
      <div key={element.id} className={classes.friendsItem}>
        <img className={classes.friendsImg} src={element.img} alt="avatar" />
        <p className={classes.friendName}>{element.name}</p>
      </div>
    )
  })

  return (
    <>
      <h2 className={classes.friendsTitle}>Друзья</h2>
      <div className={classes.friendsWrapper}>
        {friendsElements}
      </div>
    </>
  )
}

export default Friends;
