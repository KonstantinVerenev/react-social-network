import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

const initialState = {
  posts: [
    { id: 1, message: 'Привет, как дела?', likeCount: 5 },
    { id: 2, message: 'Это мой первый пост', likeCount: 9 },
  ],
  newPostText: '',
  profile: null,
  status: ''
}

const profileDataReducer = (state = initialState, action) => {
  let stateCopy;

  // old style stateCopy changing without spread
  switch (action.type) {
    case ADD_POST:
      const newPost = { id: 3, message: state.newPostText, likeCount: 0 }
      stateCopy = { ...state }
      stateCopy.posts = [...state.posts]
      stateCopy.posts.push(newPost);
      stateCopy.newPostText = '';
      return stateCopy;
    case UPDATE_NEW_POST_TEXT:
      stateCopy = { ...state }
      stateCopy.newPostText = action.newText;
      return stateCopy;
    case SET_USER_PROFILE:
      stateCopy = { ...state }
      stateCopy.profile = action.profile;
      return stateCopy;
    case SET_STATUS:
      stateCopy = { ...state }
      stateCopy.status = action.status;
      return stateCopy;
    default:
      return state;
  }
}

export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
}

export const updatePostTextActionCreator = (postText) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: postText
  }
}

export const setUserProfileActionCreator = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile: profile
  }
}

export const setUserStatusActionCreator = (status) => {
  return {
    type: SET_STATUS,
    status: status
  }
}

export const getUserProfileThunkCreator = (userId) => {
  return (dispatch) => {
    profileAPI.getUserProfile(userId)
      .then(data => {
        dispatch(setUserProfileActionCreator(data))
      })
  }
}

export const getUserStatusThunkCreator = (userId) => {
  return (dispatch) => {
    profileAPI.getUserStatus(userId)
      .then(data => {
        dispatch(setUserStatusActionCreator(data))
      })
  }
}

export const updateUserStatusThunkCreator = (status) => {
  return (dispatch) => {
    profileAPI.updateUserStatus(status)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(setUserStatusActionCreator(status))
        }
      })
  }
}

export default profileDataReducer;
