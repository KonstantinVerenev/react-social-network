const SEND_MESSAGE = 'social-network/dialogsDataReducer/SEND_MESSAGE';

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
  ]
}

const dialogsDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const newMessage = { id: '4', messageText: action.messageText };
      // return already new stateCopy object with spread
      return {
        ...state,
        messages: [...state.messages, newMessage]
      }
    default:
      return state;
  }
}

export const sendMessageActionCreator = (messageText) => {
  return {
    type: SEND_MESSAGE,
    messageText: messageText
  }
}

export default dialogsDataReducer;
