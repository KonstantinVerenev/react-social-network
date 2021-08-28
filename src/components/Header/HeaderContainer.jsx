import React from 'react'
import Header from './Header';
import { connect } from 'react-redux';
import { setUserDataActionCreator as setUserData } from '../../redux/authReducer'
import { authAPI } from '../../api/api';

class HeaderContainer extends React.Component {
  componentDidMount() {

    authAPI.isCurrentUserAuthorized().then(data => {
      if (data.resultCode === 0) {
        const { id, email, login } = data.data
        this.props.setUserData(id, email, login)
      }
    })
  }

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

export default connect(mapStateToProps, { setUserData })(HeaderContainer);
