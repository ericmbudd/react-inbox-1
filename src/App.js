import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MessageList from './components/MessageList'
import Toolbar from './components/Toolbar'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      allMessages: this.props.allMessages
    }
  }

  changeStarState = id => {
    const itemToChange = this.state.allMessages.filter((message) => message.id === id)[0]
    const i = this.state.allMessages.findIndex(message => message.id === id)
    const firstHalf = this.state.allMessages.slice(0, i)
    const secondHalf = this.state.allMessages.slice(i + 1)
    console.log(itemToChange)
    if(itemToChange.starred){
      itemToChange.starred = false
      this.setState({
        allMessages: firstHalf.concat([itemToChange], secondHalf)
      })
    } else {
      itemToChange.starred = true
      this.setState({
        allMessages: firstHalf.concat([itemToChange], secondHalf)
      })
    }
  }
  render() {
    return (
      <div className="App">
        <Toolbar />
        <MessageList changeStarState={ this.changeStarState } allMessages={ this.state.allMessages }/>
      </div>
    );
  }
}

export default App;
