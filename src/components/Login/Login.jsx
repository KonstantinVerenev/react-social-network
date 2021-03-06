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

      {props.captchaUrl ? <img src={props.captchaUrl} alt='captcha' /> : null}
      {props.captchaUrl && <Field component={Input} name={'captcha'} placeholder={'symbols from image'} validate={[required]} />}

      {props.error ?
        <div className={classes.errorBlock}>
          <p>{props.error}</p>
        </div> : null}
      <div>
        <button>LOGIN</button>
      </div>
    </form>
  )
}

const ReactLoginForm = reduxForm({ form: 'loginForm' })(LoginForm)

const Login = (props) => {

  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
  }

  if (props.isAuth) return <Redirect to='/profile' />

  return (
    <div className={classes.loginPage}>
      <h3>Вы не залогинены</h3>
      <h2>LOGIN</h2>
      <ReactLoginForm captchaUrl={props.captchaUrl} onSubmit={onSubmit} />
      bM9@9cL277eRnyw
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.authData.isAuth,
    captchaUrl: state.authData.captchaUrl
  }
}

const LoginContainer = connect(mapStateToProps, { login })(Login)

export default LoginContainer

// bM9@9cL277eRnyw
