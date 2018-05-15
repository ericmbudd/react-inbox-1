import React from 'react'
import Message from '../components/Message'


class MessageList extends React.Component {

  render() {
    return (
      <div className="container">
        {
          this.props.allMessages.map((eachMessage, id) => (
            <Message
              key={id}
              eachMessage={ eachMessage }
              changeStarState={ this.props.changeStarState }
              changeCheckState = { this.props.changeCheckState }
              openCloseBody={ this.props.openCloseBody }
            />
          ))
        }
      </div>
    )
  }
}

export default MessageList
