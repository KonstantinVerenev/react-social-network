import React from 'react'
import { connect } from 'react-redux';
import {
  setCurrentPageActionCreator as setCurrentPage,
  getUsersThunkCreator as getUsers,
  unfollowThunkCreator as unfollow,
  followThunkCreator as follow
} from '../../redux/usersDataReducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import {
  getCurrentPageSelector,
  getIsFetchingSelector,
  getIsFollowingProgressSelector,
  getPageSizeSelector,
  getTotalUsersCountSelector,
  getUsersReselector,
} from '../../redux/usersSelectors';


class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize) // getUsers - thunk
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize)

    this.props.setCurrentPage(pageNumber) // for pagination
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
      />

    </>
  }
}

// const mapStateToProps = (state) => {
//   return {
//     users: state.usersData.users,
//     pageSize: state.usersData.pageSize,
//     totalUsersCount: state.usersData.totalUsersCount,
//     currentPage: state.usersData.currentPage,
//     isFetching: state.usersData.isFetching,
//     isFollowingProgress: state.usersData.isFollowingProgress
//   }
// }

const mapStateToProps = (state) => {
  return {
    // users: getUsersSelector(state),
    users: getUsersReselector(state),
    pageSize: getPageSizeSelector(state),
    totalUsersCount: getTotalUsersCountSelector(state),
    currentPage: getCurrentPageSelector(state),
    isFetching: getIsFetchingSelector(state),
    isFollowingProgress: getIsFollowingProgressSelector(state)
  }
}

export default connect(mapStateToProps, { setCurrentPage, getUsers, follow, unfollow })(UsersContainer);

//  ------  ?????????????? ???????????????? ???????????????? ???????????????? ?? ????????????????  ------
// const mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (iserId) => {
//       dispatch(followSuccessActionCreator(iserId))
//     },
//     unfollow: (iserId) => {
//       dispatch(unfollowSuccessActionCreator(iserId))
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


//  ------  ?????? ???????????????? ???????????? ???????????????????????????? ??????????????  ------

// const UsersContainer = connect(mapStateToProps, { setCurrentPage, getUsers, follow, unfollow })(UsersAPIContainer);
// export default UsersContainer;

//  ------    ------
