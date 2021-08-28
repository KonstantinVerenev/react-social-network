const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initialState = {
  posts: [
    { id: 1, message: 'Привет, как дела?', likeCount: 5 },
    { id: 2, message: 'Это мой первый пост', likeCount: 9 },
  ],
  newPostText: '',
  profile: null
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

export default profileDataReducer;
