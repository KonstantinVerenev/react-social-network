import React from 'react'
import DialogItem from './DialogItem/DialogsItem'
import Message from './Message/Message'
import classes from './Dialogs.module.css'
import { Field, reduxForm } from 'redux-form'

const Dialogs = (props) => {

  const state = props.dialogsData

  const dialogElements = state.dialogs.map(element => {
    return <DialogItem name={element.name} id={element.id} />
  })

  const messageElements = state.messages.map(element => {
    return <Message messageText={element.messageText} />
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

const DialogsMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={'textarea'}
        name={'messageText'}
        className={classes.messageArea}
        placeholder='Введите сообщение...'
      >
      </Field>
      <button className={classes.messageAreaButton}>Отправить</button>
    </form>
  )
}

const ReactDialogsMessageForm = reduxForm({ form: 'DialogsMessageForm' })(DialogsMessageForm)

export default Dialogs;
