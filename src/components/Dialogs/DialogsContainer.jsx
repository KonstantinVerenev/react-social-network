// import React from 'react'
import Dialogs from './Dialogs';
import { sendMessageActionCreator } from '../../redux/dialogsDataReducer'
import { connect } from 'react-redux';
// import withAuthRedirect from '../hoc/withAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (messageText) => {
      const action = sendMessageActionCreator(messageText);
      dispatch(action)
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  // withAuthRedirect
)(Dialogs)

// ------- old one with props -------
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
