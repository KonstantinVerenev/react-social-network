import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { setUserProfileActionCreator as setUserProfile } from '../../redux/profileDataReducer'
import { withRouter } from 'react-router-dom'
import { profileAPI } from '../../api/api'

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId

    if (!userId) {
      userId = 2
    }

    profileAPI.getUserProfileInformation(userId).then(data => {
      this.props.setUserProfile(data)
    })
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

const WithUrlDataContainerProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setUserProfile })(WithUrlDataContainerProfileContainer);
