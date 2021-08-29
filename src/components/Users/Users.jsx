import React from 'react'
import classes from './Users.module.css'
import User from './User/User'


const Users = (props) => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

  // ----- полная (не локоничная) пагинации -----
  // const pages = []
  // for (let i = 1; i <= pagesCount; i++) {
  //   pages.push(i)
  // }

  // const pagesElement = pages.map(page => {
  //   return <span
  //     className={page === props.currentPage ? classes.selectedPage : ''}
  //     onClick={() => { onPageChanged(page) }}
  //   >
  //     {page}</span>
  // })
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
      {/* ----- полная (не локоничная) пагинации -----
        <div className={classes.pagination}>
          {pagesElement}
        </div>
        -----  */}

      <div className={classes.pagination}>
        <span onClick={() => { props.onPageChanged(1) }}>first</span>
        <span onClick={() => { props.onPageChanged(props.currentPage - 2) }} className={props.currentPage < 3 ? classes.hide : ''}>{props.currentPage - 2}</span>
        <span onClick={() => { props.onPageChanged(props.currentPage - 1) }} className={props.currentPage < 2 ? classes.hide : ''}>{props.currentPage - 1}</span>
        <span className={classes.selectedPage}>{props.currentPage}</span>
        <span onClick={() => { props.onPageChanged(props.currentPage + 1) }} className={props.currentPage > (pagesCount - 1) ? classes.hide : ''}>{props.currentPage + 1}</span>
        <span onClick={() => { props.onPageChanged(props.currentPage + 2) }} className={props.currentPage > (pagesCount - 2) ? classes.hide : ''}>{props.currentPage + 2}</span>
        <span onClick={() => { props.onPageChanged(pagesCount) }}>last</span>
      </div>

      <div className={classes.users}>
        <div>
          {usersElement}
        </div>
      </div>
    </>
  )
}

export default Users;
