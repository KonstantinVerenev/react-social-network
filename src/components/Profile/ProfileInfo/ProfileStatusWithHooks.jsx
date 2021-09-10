import React, { useEffect, useState } from 'react'

const ProfileStatusWithHooks = (props) => {

  let [status, setStatus] = useState(props.status)
  let [statusEditMode, setStatusEditMode] = useState(false)

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  const activateEditMode = () => {
    setStatusEditMode(true)
  }

  const deactivateEditMode = () => {
    setStatusEditMode(false)
    props.updateUserStatus(status)
  }

  const onStatusChange = (event) => {
    setStatus(event.target.value)
  }

  if (!statusEditMode) {
    return (
      <div>
        <span onClick={activateEditMode}>Статус: {props.status || 'Статуса нет'}</span>
      </div >
    )
  } else if (statusEditMode)
    return (
      <div>
        <input
          value={status}
          autoFocus={true}
          onBlur={deactivateEditMode}
          onChange={onStatusChange}
        >
        </input>
      </div>
    )
}


export default ProfileStatusWithHooks;
