import React from 'react'

function Message(props) {
  return (
    <div>
        <h2>
            You are logged in as {props.name}
        </h2>
    </div>
  )
}

export default Message