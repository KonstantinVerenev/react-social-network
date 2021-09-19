import { profileAPI } from "../api/api";

const ADD_POST = 'social-network/profileDataReducer/ADD-POST';
const RESET_USER_PROFILE = 'social-network/profileDataReducer/RESET_USER_PROFILE';
const SET_USER_PROFILE = 'social-network/profileDataReducer/SET_USER_PROFILE';
const SET_STATUS = 'social-network/profileDataReducer/SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'social-network/profileDataReducer/SAVE_PHOTO_SUCCESS';

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
    case RESET_USER_PROFILE:
      return {
        ...state,
        profile: null
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
    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos }
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

export const resetUserProfileActionCreator = () => {
  return {
    type: RESET_USER_PROFILE,
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

export const savePhotoSuccessActionCreator = (photos) => {
  return {
    type: SAVE_PHOTO_SUCCESS,
    photos: photos
  }
}

export const getUserProfileThunkCreator = (userId) => {
  return async (dispatch) => {
    dispatch(resetUserProfileActionCreator())
    const response = await profileAPI.getUserProfile(userId)
    dispatch(setUserProfileActionCreator(response))
  }
}

export const getUserStatusThunkCreator = (userId) => {
  return async (dispatch) => {
    const response = await profileAPI.getUserStatus(userId)
    dispatch(setUserStatusActionCreator(response))
  }
}

export const updateUserStatusThunkCreator = (status) => {
  return async (dispatch) => {
    const response = await profileAPI.updateUserStatus(status)

    if (response.data.resultCode === 0) {
      dispatch(setUserStatusActionCreator(status))
    }
  }
}

export const savePhotoThunkCreator = (file) => {
  return async (dispatch) => {
    const response = await profileAPI.savePhoto(file)

    if (response.data.resultCode === 0) {
      dispatch(savePhotoSuccessActionCreator(response.data.data.photos))
    }
  }
}

export default profileDataReducer;

      // old style stateCopy changing without spread

      // case UPDATE_NEW_POST_TEXT:
      //   stateCopy = { ...state }
      //   stateCopy.newPostText = action.newText;
      //   return stateCopy;
