import React from 'react'
import { connect } from 'react-redux';
import {
  followActionCreator as follow,
  unfollowActionCreator as unfollow,
  setCurrentPageActionCreator as setCurrentPage,
  setTotalUsersCountActionCreator as setTotalUsersCount,
  setUsersActionCreator as setUsers,
  setIsFetchingActionCreator as setIsFetching,
  setFollowingProgressActionCreator as setFollowingProgress,
} from '../../redux/usersDataReducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { userAPI } from '../../api/api';


class UsersAPIContainer extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true)
    userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
      this.props.setIsFetching(false)
      this.props.setUsers(data.items)
      this.props.setTotalUsersCount(data.totalCount)
    })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    this.props.setIsFetching(true)
    userAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
      this.props.setIsFetching(false)
      this.props.setUsers(data.items)
    })
  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader /> : null}

      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        isFollowingProgress={this.props.isFollowingProgress}
        setFollowingProgress={this.props.setFollowingProgress}
      />

    </>
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersData.users,
    pageSize: state.usersData.pageSize,
    totalUsersCount: state.usersData.totalUsersCount,
    currentPage: state.usersData.currentPage,
    isFetching: state.usersData.isFetching,
    isFollowingProgress: state.usersData.isFollowingProgress
  }
}

//  ------  диспатч заменили коротким обьектом в коннекте  ------
// const mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (iserId) => {
//       dispatch(followActionCreator(iserId))
//     },
//     unfollow: (iserId) => {
//       dispatch(unfollowActionCreator(iserId))
//     },
//     setUsers: (users) => {
//       dispatch(setUsersActionCreator(users))
//     },
//     setTotalUsersCount: (totalUserCount) => {
//       dispatch(setTotalUsersCountActionCreator(totalUserCount))
//     },
//     setCurrentPage: (currentPage) => {
//       dispatch(setCurrentPageActionCreator(currentPage))
//     },
//     setIsFetching: (isFetching) => {
//       dispatch(setIsFetchingActionCreator(isFetching))
//     }
//   }
// }
//  ------    ------

const UsersContainer = connect
  (
    mapStateToProps,
    { follow, unfollow, setCurrentPage, setTotalUsersCount, setUsers, setIsFetching, setFollowingProgress }
  )
  (UsersAPIContainer);

export default UsersContainer;
