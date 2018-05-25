import React, { Component } from 'react';
import MessageList from './components/MessageList'
import Toolbar from './components/Toolbar'
import { getAllMessages } from './actions/getAllMessages'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <MessageList />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ getAllMessages }, dispatch)

export default connect(null, mapDispatchToProps)(App)
