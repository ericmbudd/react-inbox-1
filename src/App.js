import React, { Component } from 'react';
import MessageList from './components/MessageList'
import Toolbar from './components/Toolbar'
import { getAllMessages } from './actions/getAllMessages'
import { connect } from 'react-redux'

class App extends Component {

  componentDidMount(){
    this.props.getAllMessages()
  }

  render() {
    return (
      <div className="App">
        <Toolbar />
        <MessageList />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
    getAllMessages
})

export default connect(null, mapDispatchToProps)(App)
