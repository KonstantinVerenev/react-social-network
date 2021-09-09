import { combineReducers, createStore, applyMiddleware } from "redux";
import sidebarDataReducer from './sidebarDataReducer'
import profileDataReducer from './profileDataReducer'
import dialogsDataReducer from './dialogsDataReducer'
import usersDataReducer from './usersDataReducer'
import appDataReducer from "./appReducer";
import authReducer from './authReducer'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
  sidebarData: sidebarDataReducer,
  profileData: profileDataReducer,
  dialogsData: dialogsDataReducer,
  usersData: usersDataReducer,
  authData: authReducer,
  appData: appDataReducer,
  form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

// window.store = store;

export default store;
