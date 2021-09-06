import React from 'react'
import classes from './Login.module.css'
import { Field, reduxForm } from 'redux-form'

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={'input'} name={'login'} placeholder={'login'} />
      </div>
      <div>
        <Field component={'input'} name={'password'} placeholder={'password'} type={'password'} />
      </div>
      <div>
        <Field component={'input'} name={'rememberMe'} type={'checkbox'} /> remember me
      </div>
      <div>
        <button>LOGIN</button>
      </div>
    </form>
  )
}

const ReactLoginForm = reduxForm({ form: 'loginForm' })(LoginForm)

const Login = () => {
  const onSubmit = (formData) => {
    console.log(formData)
  }

  return (
    <div className={classes.loginPage}>
      <h3>Вы не залогинены</h3>
      <h2>LOGIN</h2>
      <ReactLoginForm onSubmit={onSubmit} />
    </div>
  )
}

export default Login

