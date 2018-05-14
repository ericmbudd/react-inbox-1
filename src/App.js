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

  isDisabled = () => {
    return this.state.allMessages.filter(m => m.selected === true).length < 1 ? 'true' : ""
  }

  markAsRead = () => {
    const toMarkAsRead = this.state.allMessages.filter(m => m.selected).map(x => x.id)
    this.setState({
      allMessages: this.state.allMessages.map(m => {
        if (toMarkAsRead.includes(m.id)){
          m.read = true
        }
        return m
      })
    })
  }

  markAsUnRead = () => {
    const toMarkAsUnRead = this.state.allMessages.filter(m => m.selected).map(x => x.id)
    this.setState({
      allMessages: this.state.allMessages.map(m => {
        if (toMarkAsUnRead.includes(m.id)){
          m.read = false
        }
        return m
      })
    })
  }

  applyLabel = (newLabel) => {
    const toApplyLabel = this.state.allMessages.filter(m => m.selected).map(x => x.id)
    this.setState({
      allMessages: this.state.allMessages.map(m => {
        if (toApplyLabel.includes(m.id)){
          m.labels = m.labels.includes(newLabel) ? m.labels.concat([]) : m.labels.concat(newLabel)
        }
        return m
      })
    })
  }

  removeLabel = (labelToRemove) => {
    const toRemoveLabel = this.state.allMessages.filter(m => m.selected).map(x => x.id)
    this.setState({
      allMessages: this.state.allMessages.filter(m => {
        if (toRemoveLabel.includes(m.id)){
          m.labels = m.labels.filter(l => l !== labelToRemove)
        }
        return m
      })
    })
  }


  render() {
    return (
      <div className="App">

        <Toolbar
          isDisabled={ this.isDisabled }
          selectAllMessages={ this.selectAllMessages }
          unreadMessages={ this.unreadMessages }
          allMessages={ this.state.allMessages }
          markAsRead={ this.markAsRead }
          markAsUnRead={ this.markAsUnRead }
          applyLabel={ this.applyLabel }
          removeLabel={ this.removeLabel }
          />

        <MessageList
           changeCheckState={ this.changeCheckState }
           changeStarState={ this.changeStarState }
           allMessages={ this.state.allMessages } />

      </div>
    );
  }
}

export default App;
