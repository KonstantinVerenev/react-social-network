import { combineReducers, createStore } from "redux";
import sidebarDataReducer from './sidebarDataReducer'
import profileDataReducer from './profileDataReducer'
import dialogsDataReducer from './dialogsDataReducer'
import usersDataReducer from './usersDataReducer'
import authReducer from './authReducer'

let reducers = combineReducers({
  sidebarData: sidebarDataReducer,
  profileData: profileDataReducer,
  dialogsData: dialogsDataReducer,
  usersData: usersDataReducer,
  authData: authReducer
});

let store = createStore(reducers);

window.store = store;

export default store;
