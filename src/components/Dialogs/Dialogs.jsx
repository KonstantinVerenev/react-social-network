import React from 'react'
import DialogItem from './DialogItem/DialogsItem'
import Message from './Message/Message'
import classes from './Dialogs.module.css'
import { Field, reduxForm } from 'redux-form'
import { maxLengthValidatorCreator, required } from '../utilities/fieldValidators'
import { Textarea } from '../common/FormControls/FormConstrols'

const maxLength100 = maxLengthValidatorCreator(100)

const DialogsMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        name={'messageText'}
        className={classes.messageArea}
        placeholder='Введите сообщение...'
        validate={[required, maxLength100]}
      >
      </Field>
      <button className={classes.messageAreaButton}>Отправить</button>
    </form>
  )
}

const ReactDialogsMessageForm = reduxForm({ form: 'DialogsMessageForm' })(DialogsMessageForm)

const Dialogs = (props) => {

  const state = props.dialogsData

  const dialogElements = state.dialogs.map(element => {
    return <DialogItem key={element.id} name={element.name} id={element.id} />
  })

  const messageElements = state.messages.map(element => {
    return <Message key={element.id} messageText={element.messageText} />
  })

  const onSubmit = (formData) => {
    props.sendMessage(formData.messageText)
  }

  return (
    <div className={classes.dialogs}>

      <div className={classes.dialogItems}>
        {dialogElements}
      </div>
      <div>
        <div className={classes.messages}>
          {messageElements}
        </div>
        <ReactDialogsMessageForm onSubmit={onSubmit} />
      </div>
    </div>
  )
}

export default Dialogs;
