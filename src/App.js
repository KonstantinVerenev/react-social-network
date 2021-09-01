import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Login from "./components/Login/Login";
import HeaderContainer from './components/Header/HeaderContainer'
import ProfileContainer from "./components/Profile/ProfileContainer";
import NavbarContainer from './components/Navbar/NavbarContainer'
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";

function App() {
  return (
    <Router>
      <div className='app-wrapper'>
        <HeaderContainer />
        <div className="flex-wrapper">
          <NavbarContainer />
          <div className='content-wrapper'>
            <Route path='/login' render={() => <Login />} />
            <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
            <Route path='/dialogs/' render={() => <DialogsContainer />} />
            <Route path='/users/' render={() => <UsersContainer />} />
            <Route path='/news/' component={News} />
            <Route path='/settings/' component={Settings} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

// dialogData
