import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

  const state = props.profileData

  const postElements = state.posts.map(element => {
    return <Post message={element.message} likeCount={element.likeCount} />
  })

  const onPostChange = (event) => {
    let postText = event.target.value;
    props.postChange(postText);
  }

  const onAddPost = () => {
    props.addPost();
  }

  return (
    <div>
      <h2>Посты</h2>
      <p>Новый пост</p>
      <textarea onChange={onPostChange} value={state.newPostText} placeholder='Введите текст поста...'></textarea>
      <br />
      <button className={classes.postButton} onClick={onAddPost}>Запостить</button>

      {postElements}
    </div >
  )
}

export default MyPosts;
