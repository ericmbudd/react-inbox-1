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

  changeCheckState = id => {
    const itemToChange = this.state.allMessages.filter((message) => message.id === id)[0]
    const i = this.state.allMessages.findIndex(message => message.id === id)
    const firstHalf = this.state.allMessages.slice(0, i)
    const secondHalf = this.state.allMessages.slice(i + 1)
    if(itemToChange.selected){
      itemToChange.selected = false
      this.setState({
        allMessages: firstHalf.concat([itemToChange], secondHalf)
      })
    } else {
      itemToChange.selected = true
      this.setState({
        allMessages: firstHalf.concat([itemToChange], secondHalf)
      })
    }
  }

  unreadMessages = () => {
    return this.state.allMessages.filter(m => m.read === false).length
  }

  selectAllMessages = (e) => {
    e.preventDefault()
    if(this.state.allMessages.filter(m => m.selected === true).length < 8){
      this.setState({
        allMessages: this.state.allMessages.map(m => {
            return {...m, selected: true}
        })
      })
    } else {
      this.setState({
        allMessages: this.state.allMessages.map(m => {
          return {...m, selected: false}
        })
      })
    }
  }

  messagesSelected = () => {
    return this.state.allMessages.filter(m => m.selected === true).length < 1 ? 'disabled' : ""
  }


  render() {
    return (
      <div className="App">
        <Toolbar messagesSelected={ this.messagesSelected } selectAllMessages={ this.selectAllMessages } unreadMessages={ this.unreadMessages } allMessages={ this.state.allMessages } />
        <MessageList changeCheckState={ this.changeCheckState } changeStarState={ this.changeStarState } allMessages={ this.state.allMessages }/>
      </div>
    );
  }
}

export default App;
