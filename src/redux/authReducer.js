import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../api/api";

const SET_USER_DATA = 'social-network/authReducer/SET_USER_DATA';
const GET_CAPTCHA_URL = 'social-network/authReducer/GET_CAPTCHA_URL';

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL:
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

export const getCaptchaUrlSuccess = (captchaUrl) => {
  return {
    type: GET_CAPTCHA_URL,
    payload: { captchaUrl }
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


export const loginThunkCreator = (email, password, rememberMe, captcha) => {
  return async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe, captcha)

    if (response.resultCode === 0) {
      dispatch(isCurrentUserAuthorizedThunkCreator())
    } else {
      if (response.resultCode === 10) {
        dispatch(getCaptchaUrlThunkCreator())
      }
      const errorMessage = (response.messages.length > 0) ? response.messages[0] : 'Some error'
      dispatch(stopSubmit('loginForm', { _error: errorMessage }))
    }
  }
}

export const getCaptchaUrlThunkCreator = () => {
  return async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url

    dispatch(getCaptchaUrlSuccess(captchaUrl))
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
