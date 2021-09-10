import { createSelector } from "reselect"

export const getUsersSelector = (state) => {
  return state.usersData.users
}

//  -----  fake difficult logic to use Resector lib  -----
export const getUsersReselector = createSelector(getUsersSelector, (users) => {
  return users.filter(user => true)
})

export const getPageSizeSelector = (state) => {
  return state.usersData.pageSize
}

export const getTotalUsersCountSelector = (state) => {
  return state.usersData.totalUsersCount
}

export const getCurrentPageSelector = (state) => {
  return state.usersData.currentPage
}

export const getIsFetchingSelector = (state) => {
  return state.usersData.isFetching
}

export const getIsFollowingProgressSelector = (state) => {
  return state.usersData.isFollowingProgress
}

