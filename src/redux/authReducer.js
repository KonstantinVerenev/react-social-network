import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = 'social-network/authReducer/SET_USER_DATA';

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}

export const setUserDataActionCreator = (userId, email, login, isAuth) => {
  return {
    type: SET_USER_DATA,
    payload: { userId, email, login, isAuth }
  }
}

export const isCurrentUserAuthorizedThunkCreator = () => {
  return async (dispatch) => {
    const responce = await authAPI.isCurrentUserAuthorized()

    if (responce.resultCode === 0) {
      const { id, email, login } = responce.data
      dispatch(setUserDataActionCreator(id, email, login, true))
    }
  }
}


export const loginThunkCreator = (email, password, rememberMe) => {
  return async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe)

    if (response.resultCode === 0) {
      dispatch(isCurrentUserAuthorizedThunkCreator())
    } else {
      const errorMessage = (response.messages.length > 0) ? response.messages[0] : 'Some error'
      dispatch(stopSubmit('loginForm', { _error: errorMessage }))
    }
  }
}

export const logoutThunkCreator = () => {
  return async (dispatch) => {
    const response = await authAPI.logout()

    if (response.resultCode === 0) {
      dispatch(setUserDataActionCreator(null, null, null, false))
    }
  }
}

export default authReducer;
