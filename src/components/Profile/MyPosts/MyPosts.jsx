import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../../common/FormControls/FormConstrols'
import { maxLengthValidatorCreator, required } from '../../utilities/fieldValidators'
import classes from './MyPosts.module.css'
import Post from './Post/Post'

const maxLength20 = maxLengthValidatorCreator(20);

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} >
      <Field
        component={Textarea}
        name={'postText'}
        placeholder='Введите текст поста...'
        validate={[required, maxLength20]}
      ></Field>
      <br />
      <button className={classes.postButton}>Запостить</button>
    </form>
  )
}

const ReactAddPostForm = reduxForm({ form: 'AddPostForm' })(AddPostForm)

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

export default MyPosts;
