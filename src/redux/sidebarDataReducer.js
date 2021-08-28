const initialState = {
  friends: [
    { id: 1, name: 'Лёша', img: '/img/post-avatar.png' },
    { id: 2, name: 'Огогоша', img: '/img/post-avatar.png' },
    { id: 3, name: 'Виньямин', img: '/img/post-avatar.png' },
    { id: 4, name: 'Враг', img: '/img/post-avatar.png' }
  ]
}

const sidebarDataReducer = (state = initialState, action) => {
  let stateCopy = { ...state }
  return stateCopy;
}

export default sidebarDataReducer;
