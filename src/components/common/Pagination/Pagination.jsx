import React, { useState } from 'react'
import classes from './Pagination.module.css'


const Pagination = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {

  const pagesCount = Math.ceil(totalItemsCount / pageSize)

  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  let portionCount = Math.ceil(pagesCount / portionSize)

  let [portionNumber, setPortionNumber] = useState(1);

  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  let rightPortionPageNumber = portionNumber * portionSize

  return (
    <div className={classes.pagination}>
      <button
        onClick={() => {
          setPortionNumber(1)
          onPageChanged(1)
        }}
        className={(portionNumber > 1) ? classes.available : classes.unavailable}
      >
        FIRST
      </button>

      <button
        onClick={() => { setPortionNumber(portionNumber - 1) }}
        className={(portionNumber > 1) ? classes.available : classes.unavailable}
      >
        PREV
      </button>

      {
        pages
          .filter((page) => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
          .map((page) => {
            return (
              <span
                onClick={() => { onPageChanged(page) }}
                className={(page === currentPage) ? classes.selectedPage : null}
              >
                {page}
              </span>
            )
          })
      }

      <button
        onClick={() => { setPortionNumber(portionNumber + 1) }}
        className={(portionNumber < portionCount) ? classes.available : classes.unavailable}
      >
        NEXT
      </button>

      <button
        onClick={() => {
          setPortionNumber(portionCount)
          onPageChanged(pagesCount)
        }}
        className={(portionNumber < portionCount) ? classes.available : classes.unavailable}
      >
        LAST
      </button>

    </div >
  )

}

// ----- light pagination -----
// const Pagination = (props) => {
//   const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

//   return (
//     <div className={classes.pagination}>
//       <span onClick={() => { props.onPageChanged(1) }}>first</span>
//       <span onClick={() => { props.onPageChanged(props.currentPage - 2) }} className={props.currentPage < 3 ? classes.hide : ''}>{props.currentPage - 2}</span>
//       <span onClick={() => { props.onPageChanged(props.currentPage - 1) }} className={props.currentPage < 2 ? classes.hide : ''}>{props.currentPage - 1}</span>
//       <span className={classes.selectedPage}>{props.currentPage}</span>
//       <span onClick={() => { props.onPageChanged(props.currentPage + 1) }} className={props.currentPage > (pagesCount - 1) ? classes.hide : ''}>{props.currentPage + 1}</span>
//       <span onClick={() => { props.onPageChanged(props.currentPage + 2) }} className={props.currentPage > (pagesCount - 2) ? classes.hide : ''}>{props.currentPage + 2}</span>
//       <span onClick={() => { props.onPageChanged(pagesCount) }}>last</span>
//     </div>
//   )
// }
// -----    -----

export default Pagination;
