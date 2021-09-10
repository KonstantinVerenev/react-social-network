import React from 'react'

class ProfileStatus extends React.Component {
  state = {
    statusEditMode: false,
    status: this.props.status
  }

  componentDidUpdate(prevProps) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }

  onStatusChange = (event) => {
    this.setState({
      status: event.target.value
    })
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
    this.props.updateUserStatus(this.state.status)
  }

  render() {
    if (!this.state.statusEditMode) {
      return (
        <div>
          <span onClick={this.activateEditMode}>Статус: {this.props.status || '-----------'}</span>
        </div>
      )
    } else if (this.state.statusEditMode)
      return (
        <div>
          <input autoFocus={true} onChange={this.onStatusChange} onBlur={this.deactivateEditMode} value={this.state.status}></input>
        </div>
      )
  }
}

export default ProfileStatus;
