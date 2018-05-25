import React, { Component } from 'react';
import MessageList from './components/MessageList'
import Toolbar from './components/Toolbar'

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

export default App
