// import React from 'react'
import Dialogs from './Dialogs';
import { updateMessageTextActionCreator, addMessageActionCreator } from '../../redux/dialogsDataReducer'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    messageChange: (messageText) => {
      const action = updateMessageTextActionCreator(messageText);
      dispatch(action);
    },
    addMessage: () => {
      const action = addMessageActionCreator();
      dispatch(action)
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;

// ------- old one wtih props -------
// const DialogsContainer = (props) => {
//   const state = props.store.getState();

//   const messageChange = (messageText) => {
//     const action = updateMessageTextActionCreator(messageText);
//     props.store.dispatch(action);
//   }

//   const addMessage = () => {
//     const action = addMessageActionCreator();
//     props.store.dispatch(action)
//   }

//   return (
//     <Dialogs
//       dialogsData={state.dialogsData}
//       addMessage={addMessage}
//       messageChange={messageChange}
//     />
//   )
// }
// ------- old one wtih props -------
