import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

const initialState = {
  posts: [
    { id: 1, message: 'Привет, как дела?', likeCount: 5 },
    { id: 2, message: 'Это мой первый пост', likeCount: 9 },
  ],
  profile: null,
  status: ''
}

const profileDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = { id: 3, message: action.postText, likeCount: 0 }
      return {
        ...state,
        posts: [...state.posts, newPost]
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      };
    default:
      return state;
  }
}

export const addPostActionCreator = (postText) => {
  return {
    type: ADD_POST,
    postText
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

      // old style stateCopy changing without spread

      // case UPDATE_NEW_POST_TEXT:
      //   stateCopy = { ...state }
      //   stateCopy.newPostText = action.newText;
      //   return stateCopy;
