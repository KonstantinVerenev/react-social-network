import React from 'react'
import classes from './Post.module.css'

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src="/img/post-avatar.png" alt="avatar" />
      <p className={classes.postText}>{props.message}</p>
      <p className='likeCount'>Likes:{props.likeCount}</p>
    </div>
  )
}

export default Post;
