import React from 'react'
import { connect } from 'react-redux'
import Message from '../components/Message'

class MessageList extends React.Component {

  render() {
    return (
        <div className="container">
          {
            this.props.allMessages.map((eachMessage, i) => <Message key={i} /> )
          }
        </div>
    )
  }
}

const mapStateToProps = state => {
  return { allMessages: state.allMessages }
}

export default connect(mapStateToProps)(MessageList)
