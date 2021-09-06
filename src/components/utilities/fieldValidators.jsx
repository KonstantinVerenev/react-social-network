export const required = (value) => {
  if (!value) return 'Поле должно быть заполнено'
  else return undefined
}

export const maxLengthValidatorCreator = (maxLength) => {
  return (value) => {
    if (value.length > maxLength) return `Максимальная длинна - ${maxLength} символов`
    else return undefined
  }
}

// export const maxLength10 = (value) => {
//   if (value.length > 10) return 'Error: Max length is 30 symbols'
//   else return undefined
// }
