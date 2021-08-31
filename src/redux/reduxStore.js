import { combineReducers, createStore, applyMiddleware } from "redux";
import sidebarDataReducer from './sidebarDataReducer'
import profileDataReducer from './profileDataReducer'
import dialogsDataReducer from './dialogsDataReducer'
import usersDataReducer from './usersDataReducer'
import authReducer from './authReducer'
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
  sidebarData: sidebarDataReducer,
  profileData: profileDataReducer,
  dialogsData: dialogsDataReducer,
  usersData: usersDataReducer,
  authData: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
