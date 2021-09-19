import React from 'react'
import classes from './Users.module.css'
import User from './User/User'
import Pagination from '../common/Pagination/Pagination'


const Users = (props) => {

  const usersElement = props.users.map(user => {
    return <User
      user={user}
      follow={props.follow}
      unfollow={props.unfollow}
      key={user.id}
      isFollowingProgress={props.isFollowingProgress}
      setFollowingProgress={props.setFollowingProgress}
    />
  })

  return (
    <>
      <Pagination
        totalItemsCount={props.totalUsersCount}
        pageSize={props.pageSize}
        onPageChanged={props.onPageChanged}
        currentPage={props.currentPage}
      />

      <div className={classes.users}>
        <div>
          {usersElement}
        </div>
      </div>
    </>
  )
}

export default Users;
