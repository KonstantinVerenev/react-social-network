import React from 'react'
import Header from './Header';
import { connect } from 'react-redux';
import {
  logoutThunkCreator as logout
} from '../../redux/authReducer'

class HeaderContainer extends React.Component {
  render() {
    return (
      <Header {...this.props} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.authData.userId,
    email: state.authData.email,
    login: state.authData.login,
    isAuth: state.authData.isAuth
  }
}

export default connect(mapStateToProps, { logout })(HeaderContainer);
