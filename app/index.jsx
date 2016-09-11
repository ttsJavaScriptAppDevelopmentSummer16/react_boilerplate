import React from 'react'
import ReactDOM from 'react-dom'

class MessageInput extends React.Component {
  constructor() {
    super(); //needed for inheritance

    //Define an intial state OBJECT
    this.state = {messages:
      [
        {text:"This is message 1",time:"1:00 AM",user:"psarma"},
        {text:"This is message 2",time:"2:00AM",user:"psarma"},
        {text:"This is message 3",time:"3:00AM",user:"psarma"}
      ]
    }
}
//   componentDidMount(){
//   ReactDOM.findDOMNode(this.refs.messageInput).focus();
// }

  render() {
    //Figure out the elements in advance
    var messageMap = this.state.messages.map(function(message, i){
        return (<li key={i}>Here is the message: {message.text}, at time: {message.time}, from user: {message.user}</li>)
    })
    //
    // return (
    //     <ul>{students}</ul>
    // );

    return (
      <div>
        <label htmlfor='messageInput'>Insert Message:
          <input type = 'text' id= 'messageInput' ref='messageInput' placeholder='Your message here'/>
        </label>
        <input type = 'submit' value = 'Submit'/>
        <ul>{messageMap}</ul>
      </div>
    )
  }
}

const mountPoint = document.querySelector('#root')
ReactDOM.render(<MessageInput/>,mountPoint)
