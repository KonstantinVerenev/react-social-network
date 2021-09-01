import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getUserProfileThunkCreator as getUserProfile } from '../../redux/profileDataReducer'
import { withRouter } from 'react-router-dom'
import WithAuthRedirect from '../hoc/WithAuthRedirect'

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 2
    }

    this.props.getUserProfile(userId)
  }

  render() {
    return <Profile {...this.props} />
  }
}


const mapStateToProps = (state) => {
  return {
    profile: state.profileData.profile
  }
}

const AuthRedirectComponent = WithAuthRedirect(ProfileContainer)

const WithUrlDataContainerProfileContainer = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerProfileContainer);
