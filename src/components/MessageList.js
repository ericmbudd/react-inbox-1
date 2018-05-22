import React from 'react'
import Message from '../components/Message'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class MessageList extends React.Component {

  render() {
    return (
        <div className="container">
          {
            this.props.allMessages.map((eachMessage, i) => (
                <Message
                  clickMarkAsRead={ this.props.clickMarkAsRead }
                  key={ i }
                  allMessages={this.props.allMessages}
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
