import React from "react"
import { Field, reduxForm } from "redux-form"
import { Input, Textarea } from "../../common/FormControls/FormConstrols"
import classes from './ProfileDataForm.module.css'

const ProfileDataForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <button>save</button>

      {props.error ?
        <div className={classes.errorBlock}>
          <p>{props.error}</p>
        </div> : null}

      <h2>
        Имя:
        <Field
          className={classes.floatField}
          component={Input}
          name={'fullName'}
          placeholder='Полное имя'
          validate={[]}
        />
      </h2>

      <h2>
        Обо мне:
        <Field
          className={classes.floatField}
          component={Textarea}
          name={'aboutMe'}
          placeholder='Обо мне:'
          validate={[]}
        />
      </h2>

      <h2>
        В поисках работы:
        <Field
          className={classes.floatField}
          component={Input}
          type={'checkbox'}
          name={'lookingForAJob'}
          validate={[]}
        />
      </h2>

      <h2>
        Какую работу:
        <Field
          className={classes.floatField}
          component={Textarea}
          name={'lookingForAJobDescription'}
          placeholder='Какую работу:'
          validate={[]}
        />
      </h2>

      <h2>Контакты:</h2>
      {Object.keys(props.initialValues.contacts).map(key => {
        return (
          <h3 key={key}>
            <>
              {key}:

              < Field
                className={classes.floatField}
                component={Input}
                name={`contacts.${key}`}
                placeholder={key}
                validate={[]}
              />
            </>
          </h3>
        )
      })}

    </form>
  )
}

const ProfileDataReduxForm = reduxForm({ form: 'profileDataForm' })(ProfileDataForm)

export default ProfileDataReduxForm
