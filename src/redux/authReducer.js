import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
  // isFetching: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.userData,
        isAuth: true
      }
    default:
      return state;
  }
}

export const setUserDataActionCreator = (userId, email, login) => {
  return {
    type: SET_USER_DATA,
    userData: { userId, email, login }
  }
}

export const isCurrentUserAuthorizedThunkCreator = () => {
  return (dispatch) => {
    authAPI.isCurrentUserAuthorized()
      .then(data => {
        if (data.resultCode === 0) {
          const { id, email, login } = data.data
          dispatch(setUserDataActionCreator(id, email, login))
        }
      })
  }
}

export default authReducer;
