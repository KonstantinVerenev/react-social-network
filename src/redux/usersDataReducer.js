import { userAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 1,
  currentPage: 1,
  isFetching: false,
  isFollowingProgress: []
}

const usersDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: true }
          } else {
            return user;
          }
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: false }
          } else {
            return user;
          }
        })
      }
    case SET_USERS:
      return {
        ...state,
        users: action.users
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
      }
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        isFollowingProgress: action.isFollowingProgress
          ? [...state.isFollowingProgress, action.userId]
          : state.isFollowingProgress.filter(id => id !== action.userId)
      }
    default:
      return state;
  }
}

export const followSuccessActionCreator = (userId) => {
  return {
    type: FOLLOW,
    userId: userId
  }
}

export const unfollowSuccessActionCreator = (userId) => {
  return {
    type: UNFOLLOW,
    userId: userId
  }
}

export const setUsersActionCreator = (users) => {
  return {
    type: SET_USERS,
    users: users
  }
}

export const setCurrentPageActionCreator = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage: currentPage
  }
}

export const setTotalUsersCountActionCreator = (totalUsersCount) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount: totalUsersCount
  }
}

export const setIsFetchingActionCreator = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching
  }
}

export const setFollowingProgressActionCreator = (isFollowingProgress, userId) => {
  return {
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFollowingProgress: isFollowingProgress,
    userId: userId
  }
}

//  ----  ThunkCreator  ----
export const getUsersThunkCreator = (currentPage, pageSize) => {
  //  ----  Thunk  ----
  return (dispatch) => {
    dispatch(setIsFetchingActionCreator(true))
    userAPI.getUsers(currentPage, pageSize).then(data => {
      dispatch(setIsFetchingActionCreator(false))
      dispatch(setUsersActionCreator(data.items))
      dispatch(setTotalUsersCountActionCreator(data.totalCount))
    })
  }
  //  ----  ----  ----
}
//  ----  ----  ----


export const followThunkCreator = (userId) => {
  return (dispatch) => {
    dispatch(setFollowingProgressActionCreator(true, userId))
    userAPI.follow(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(followSuccessActionCreator(userId))
      }
      dispatch(setFollowingProgressActionCreator(false, userId))
    })
  }
}

export const unfollowThunkCreator = (userId) => {
  return (dispatch) => {
    dispatch(setFollowingProgressActionCreator(true, userId))
    userAPI.unfollow(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(unfollowSuccessActionCreator(userId))
      }
      dispatch(setFollowingProgressActionCreator(false, userId))
    })
  }
}



export default usersDataReducer;
