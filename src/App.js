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
import { connect } from "react-redux";

import { initializeAppThunkCreator as initializeApp } from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

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
      </Router >
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.appData.initialized
  }
}

export default connect(mapStateToProps, { initializeApp })(App);

// dialogData
