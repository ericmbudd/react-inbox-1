import React from 'react'
import { connect } from 'react-redux'
import Message from '../components/Message'
import { getAllMessages } from '../actions/getAllMessages'

class MessageList extends React.Component {

  componentDidMount() {
    getAllMessages()
  }

  render() {
    return (
        <div className="container">
          {
            this.props.allMessages.map((eachMessage, i) => <Message key={i} eachMessage={ eachMessage } /> )
          }
        </div>
    )
  }
}

const mapStateToProps = state => ({ allMessages: [] })

const mapDispatchToProps = dispatch => ({ getAllMessages })

export default connect(mapStateToProps)(MessageList)
