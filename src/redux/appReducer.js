import {
  isCurrentUserAuthorizedThunkCreator as isCurrentUserAuthorized,
} from './authReducer'

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initialState = {
  initialized: false
}

const appDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      }
    default:
      return state;
  }
}

export const initializedActionCreator = () => {
  return {
    type: INITIALIZED_SUCCESS
  }
}

export const initializeAppThunkCreator = () => {
  return (dispatch) => {
    const promise = dispatch(isCurrentUserAuthorized())
    promise.then(() => {
      dispatch(initializedActionCreator())
    })
  }
}

export default appDataReducer;
