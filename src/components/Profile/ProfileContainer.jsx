import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getUserProfileThunkCreator as getUserProfile } from '../../redux/profileDataReducer'
import { withRouter } from 'react-router-dom'
import withAuthRedirect from '../hoc/withAuthRedirect'
import { compose } from 'redux'

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

export default compose(
  connect(mapStateToProps, { getUserProfile }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);

//  ------  old one without compose  ------
// const AuthRedirectComponent = withAuthRedirect(ProfileContainer)
// const WithUrlDataContainerProfileContainer = withRouter(AuthRedirectComponent)
// export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerProfileContainer);
//  ------    ------
