import React from 'react'
import { connect } from 'react-redux'
import Message from '../components/Message'
import { bindActionCreators } from 'redux'
import { getAllMessages } from '../actions/getAllMessages'


class MessageList extends React.Component {

  componentWillMount(){
    this.props.getAllMessages()
  }

  render() {
    return (
        <div className="container">
          {
            this.props.all.map((eachMessage, i) => <Message key={i} eachMessage={ eachMessage } /> )
          }
        </div>
    )
  }
}

const mapStateToProps = state => {
  return state.messages
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ getAllMessages }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MessageList)
