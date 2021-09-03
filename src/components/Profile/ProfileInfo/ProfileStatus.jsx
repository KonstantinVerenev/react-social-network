import React from 'react'

class ProfileStatus extends React.Component {
  state = {
    statusEditMode: false
  }

  activateEditMode = () => {
    this.setState({
      statusEditMode: true
    })
  }

  deactivateEditMode = () => {
    this.setState({
      statusEditMode: false
    })
  }

  render() {
    if (!this.state.statusEditMode) {
      return (
        <div>
          <span onClick={this.activateEditMode}>Статус: {this.props.status}</span>
        </div>
      )
    } else if (this.state.statusEditMode)
      return (
        <div>
          <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status}></input>
        </div>
      )
  }
}

export default ProfileStatus;
