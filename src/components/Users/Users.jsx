import React from 'react'
import classes from './Users.module.css'
import User from './User/User'


const Users = (props) => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

  // ----- light pagination -----
  const pagination =
    <div className={classes.pagination}>
      <span onClick={() => { props.onPageChanged(1) }}>first</span>
      <span onClick={() => { props.onPageChanged(props.currentPage - 2) }} className={props.currentPage < 3 ? classes.hide : ''}>{props.currentPage - 2}</span>
      <span onClick={() => { props.onPageChanged(props.currentPage - 1) }} className={props.currentPage < 2 ? classes.hide : ''}>{props.currentPage - 1}</span>
      <span className={classes.selectedPage}>{props.currentPage}</span>
      <span onClick={() => { props.onPageChanged(props.currentPage + 1) }} className={props.currentPage > (pagesCount - 1) ? classes.hide : ''}>{props.currentPage + 1}</span>
      <span onClick={() => { props.onPageChanged(props.currentPage + 2) }} className={props.currentPage > (pagesCount - 2) ? classes.hide : ''}>{props.currentPage + 2}</span>
      <span onClick={() => { props.onPageChanged(pagesCount) }}>last</span>
    </div>
  // -----    -----

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
      {pagination}

      <div className={classes.users}>
        <div>
          {usersElement}
        </div>
      </div>
    </>
  )
}

export default Users;
