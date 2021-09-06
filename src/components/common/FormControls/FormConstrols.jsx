import React from "react"
import classes from "./FormConstrols.module.css"

//  ----- the one with HOC -----
const formControlCreator = (Element) => {
  return ({ input, meta, ...restProps }) => {
    const showError = meta.touched && meta.error
    return (
      <div className={showError && classes.error}>
        <Element {...input} {...restProps} />
        {showError && <span>{meta.error}</span>}
      </div >
    )
  }
}

export const Textarea = formControlCreator('textarea')

export const Input = formControlCreator('input')

  //  ----- the one with React.createElement -----
  // const FormControl = ({ input, meta, ...restProps }) => {
  //   const showError = meta.touched && meta.error
  //   return (
  //     <div className={showError && classes.error}>
  //       {React.createElement(
  //         restProps.elementName,
  //         { ...input, ...restProps }
  //       )}
  //       {showError && <span>{meta.error}</span>}
  //     </div >
  //   )
  // }

  // export const Textarea = (props) => {
  //   return <FormControl {...props} elementName='textarea' />
  // }

  // export const Input = (props) => {
  //   return <FormControl {...props} elementName='input ' />
  // }


//  ----- old one with double code -----
// export const Input = ({ input, meta, ...restProps }) => {
//   const showError = meta.touched && meta.error
//   return (
//     <div className={showError && classes.error}>
//       <input {...input} {...restProps} />
//       {showError && <span>{meta.error}</span>}
//     </div >
//   )
// }
