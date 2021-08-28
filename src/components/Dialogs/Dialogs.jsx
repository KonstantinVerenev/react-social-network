import React from 'react'
import DialogItem from './DialogItem/DialogsItem'
import Message from './Message/Message'
import classes from './Dialogs.module.css'

const Dialogs = (props) => {

  const state = props.dialogsData

  const dialogElements = state.dialogs.map(element => {
    return <DialogItem name={element.name} id={element.id} />
  })

  const messageElements = state.messages.map(element => {
    return <Message messageText={element.messageText} />
  })

  const onMessageChange = (event) => {
    let messageText = event.target.value;
    props.messageChange(messageText);
  }

  const onAddMessage = () => {
    props.addMessage();
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
        <textarea
          className={classes.messageArea}
          onChange={onMessageChange}
          value={state.newMessageText}
          placeholder='Введите сообщение...'
        >
        </textarea>
        <button className={classes.messageAreaButton} onClick={onAddMessage}>Отправить</button>
      </div>
    </div>
  )
}

export default Dialogs;
