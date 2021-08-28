const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const initialState = {
  dialogs: [
    { id: 1, name: 'Dmitry', },
    { id: 2, name: 'Dart Vader', },
    { id: 3, name: 'Mad Max' },
    { id: 4, name: 'Pumba' },
    { id: 5, name: 'Donald' }
  ],
  messages: [
    { id: '1', messageText: 'Привет !!!' },
    { id: '2', messageText: 'Йо' },
    { id: '3', messageText: 'Как дела?' }
  ],
  newMessageText: ''
}

const dialogsDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const newMessage = { id: '4', messageText: state.newMessageText };
      // return already new stateCopy object with spread
      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageText: ''
      }
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newText
      }
    default:
      return state;
  }
}

export const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE
  }
}

export const updateMessageTextActionCreator = (messageText) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: messageText
  }
}

export default dialogsDataReducer;
