// import React from 'react'
import Dialogs from './Dialogs';
import { updateMessageTextActionCreator, addMessageActionCreator } from '../../redux/dialogsDataReducer'
import { connect } from 'react-redux';
import WithAuthRedirect from '../hoc/WithAuthRedirect';

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

const AuthRedirectComponent = WithAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

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
