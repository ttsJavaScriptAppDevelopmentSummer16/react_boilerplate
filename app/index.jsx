import React from 'react'
import ReactDOM from 'react-dom'

class MessageInput extends React.Component {
  render() {
    return (
      <div>
        <input type = 'text' value = 'Insert Text'/>
        <input type = 'button' value = 'Click Here'/>
      </div>
    )
  }
}

const mountPoint = document.querySelector('#root')
ReactDOM.render(<MessageInput/>,mountPoint)
