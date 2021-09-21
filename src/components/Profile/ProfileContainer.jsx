import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import {
  getUserProfileThunkCreator as getUserProfile,
  getUserStatusThunkCreator as getUserStatus,
  updateUserStatusThunkCreator as updateUserStatus,
  savePhotoThunkCreator as savePhoto,
  saveProfileThunkCreator as saveProfile
} from '../../redux/profileDataReducer'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'

class ProfileContainer extends React.Component {

  refreshProfile() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = this.props.autorizedUserId
      if (!userId) {
        this.props.history.push('/login')
      }
    }

    this.props.getUserProfile(userId)
    this.props.getUserStatus(userId)
  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.userId !== this.props.match.params.userId) {
      this.refreshProfile()
    }
  }

  render() {
    return <Profile {...this.props} isOwner={!this.props.match.params.userId} />
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profileData.profile,
    status: state.profileData.status,
    autorizedUserId: state.authData.userId,
    isAuth: state.authData.isAuth
  }
}

export default compose(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile }),
  withRouter
)(ProfileContainer);

//  ------  old one without compose  ------
// const AuthRedirectComponent = withAuthRedirect(ProfileContainer)
// const WithUrlDataContainerProfileContainer = withRouter(AuthRedirectComponent)
// export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerProfileContainer);
//  ------    ------
