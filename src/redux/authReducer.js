import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

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
  return (dispatch) => {
    authAPI.isCurrentUserAuthorized()
      .then(data => {
        if (data.resultCode === 0) {
          const { id, email, login } = data.data
          dispatch(setUserDataActionCreator(id, email, login, true))
        }
      })
  }
}

export const loginThunkCreator = (email, password, rememberMe) => {
  return (dispatch) => {
    authAPI.login(email, password, rememberMe)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(isCurrentUserAuthorizedThunkCreator())
        }
      })
  }
}

export const logoutThunkCreator = () => {
  return (dispatch) => {
    authAPI.logout()
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(setUserDataActionCreator(null, null, null, false))
        }
      })
  }
}

export default authReducer;
