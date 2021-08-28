import profileDataReducer from './profileDataReducer';
import dialogsDataReducer from './dialogsDataReducer';
import sidebarDataReducer from './sidebarDataReducer';

let store = {
  _state: {
    profileData: {
      posts: [
        { id: 1, message: 'Привет, как дела?', likeCount: 5 },
        { id: 2, message: 'Это мой первый пост', likeCount: 2 }
      ],
      newPostText: ''
    },
    dialogsData: {
      dialogs: [
        { id: 1, name: 'Dmitry', },
        { id: 2, name: 'Dart Vader', },
        { id: 3, name: 'Mad Max' },
        { id: 4, name: 'Pumba' },
        { id: 5, name: 'Donald' }
      ],
      messages: [
        { id: '1', messageText: 'Привет !!!' },
        { id: '2', messageText: 'Йо' },
        { id: '3', messageText: 'Как дела?' }
      ],
      newMessageText: ''
    },
    sidebarData: {
      friends: [
        { id: 1, name: 'Лёша', img: '/img/post-avatar.png' },
        { id: 2, name: 'Огогоша', img: '/img/post-avatar.png' },
        { id: 3, name: 'Виньямин', img: '/img/post-avatar.png' },
        { id: 4, name: 'Враг', img: '/img/post-avatar.png' },
      ]
    }
  },
  _callSubscriber() {
    console.log('state change')
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  addPost() {
    const newPost = { id: 3, message: this._state.profileData.newPostText, likeCount: 0 }
    this._state.profileData.posts.push(newPost);
    this._state.profileData.newPostText = '';
    this._callSubscriber(this._state);
  },
  updatePostText(newText) {
    this._state.profileData.newPostText = newText;
    this._callSubscriber(this._state);
  },

  dispatch(action) {
    this._state.profileData = profileDataReducer(this._state.profileData, action);
    this._state.dialogsData = dialogsDataReducer(this._state.dialogsData, action);
    this._state.sidebarData = sidebarDataReducer(this._state.sidebarData, action);
    this._callSubscriber(this._state);
  }
}

export default store;
