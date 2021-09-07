import React from 'react'
import classes from './Login.module.css'
import { Field, reduxForm } from 'redux-form'
import { maxLengthValidatorCreator, required } from '../utilities/fieldValidators'
import { Input } from '../common/FormControls/FormConstrols';
import { loginThunkCreator as login } from '../../redux/authReducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const maxLength30 = maxLengthValidatorCreator(30);

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Input} name={'email'} placeholder={'email'} validate={[required, maxLength30]} />
      </div>
      <div>
        <Field component={Input} name={'password'} placeholder={'password'} type={'password'} validate={[required, maxLength30]} />
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

const Login = (props) => {

  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }

  if (props.isAuth) return <Redirect to='/profile' />

  return (
    <div className={classes.loginPage}>
      <h3>Вы не залогинены</h3>
      <h2>LOGIN</h2>
      <ReactLoginForm onSubmit={onSubmit} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.authData.isAuth
  }
}

const LoginContainer = connect(mapStateToProps, { login })(Login)

export default LoginContainer

