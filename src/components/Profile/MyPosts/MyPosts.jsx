import React from 'react'
import { Field, reduxForm } from 'redux-form'
import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

  const state = props.profileData

  const postElements = state.posts.map(element => {
    return <Post message={element.message} likeCount={element.likeCount} />
  })

  const onSubmit = (formData) => {
    props.addPost(formData.postText)
  }

  return (
    <div>
      <h2>Посты</h2>
      <p>Новый пост</p>
      <ReactAddPostForm onSubmit={onSubmit} />
      {postElements}
    </div >
  )
}

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component={'textarea'} name={'postText'} placeholder='Введите текст поста...'></Field>
      <br />
      <button className={classes.postButton}>Запостить</button>
    </form>
  )
}

const ReactAddPostForm = reduxForm({ form: 'AddPostForm' })(AddPostForm)

export default MyPosts;
