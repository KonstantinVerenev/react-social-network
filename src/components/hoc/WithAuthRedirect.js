import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const WithAuthRedirect = (Component) => {

  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Redirect to='/login' />

      return <Component {...this.props} />
    }
  }

  const mapStateToPropsForRedirect = (state) => {
    return {
      isAuth: state.authData.isAuth
    }
  }

  const ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

  return ConnectedAuthRedirectComponent
}

export default WithAuthRedirect
