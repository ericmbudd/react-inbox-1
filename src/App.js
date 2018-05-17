import React, { Component } from 'react';
import logo from './logo.svg';
import MessageList from './components/MessageList'
import Toolbar from './components/Toolbar'
// import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      allMessages: [],
      composeIsOpen: false
    }
  }

  componentDidMount = () => {
    this.fetchMessagesData()
  }

  patch = async (object) => {
    await fetch("http://localhost:8082/api/messages", {
              body: JSON.stringify(object),
              headers: {
              'content-type': 'application/json'
              },
              method: 'PATCH'
          })
          .then(response => response.json())
          .catch(error => error)
  }

  postNewItem = async (object) => {
    await fetch("http://localhost:8082/api/messages", {
              body: JSON.stringify(object),
              headers: {
              'content-type': 'application/json'
              },
              method: 'POST'
          })
          .then(response => response.json())
          .catch(error => error)
    this.setState({
      allMessages: this.state.allMessages.concat([object])
    })
  }

  fetchMessagesData = async () => {
    const messagesData = await fetch("http://localhost:8082/api/messages")
                      .then(response => response.json())
                      .then(json => json._embedded.messages)
                      .catch(error => console.log(error))
    this.setState({
      allMessages: this.state.allMessages.concat(messagesData)
    })
  }

  // METHOD TO CHANGE THE STATE OF A STAR WHEN CLICKED ON
  changeStarState = id => {
    const itemToChange = this.state.allMessages.filter((message) => message.id === id)[0]
    const i = this.state.allMessages.findIndex(message => message.id === id)
    const firstHalf = this.state.allMessages.slice(0, i)
    const secondHalf = this.state.allMessages.slice(i + 1)

    const patchItem = {
      "messageIds": [id],
      "command": "star",
      "star": !itemToChange.starred
    }
    this.patch(patchItem)

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

  // METHOD TO CHANGE THE STATE OF A MESSAGE WHEN THE CHECKBOX IS CLICKED ON
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

  // METHOD TO RETRIEVE ALL UNREAD MESSAGES
  unreadMessages = () => {
    return this.state.allMessages.filter(m => m.read === false).length
  }


  // METHOD TO SELECT / DE-SELECT ALL MESSAGES
  selectAllMessages = (e) => {
    e.preventDefault()
    if(this.state.allMessages.filter(m => m.selected === true).length < this.state.allMessages.length){
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


  // RETURN A WHETHER OR NOT SOMETHING OUGHT TO BE DISABLED
  isDisabled = () => {
    return this.state.allMessages.filter(m => m.selected === true).length < 1 ? 'true' : ""
  }


  // MARK A MESSAGE AS READ METHOD
  markAsRead = () => {
    const toMarkAsRead = this.state.allMessages.filter(m => m.selected).map(x => x.id)

    const patchItem = {
      "messageIds": toMarkAsRead,
      "command": "read",
      "read": true
    }
    this.patch(patchItem)

    this.setState({
      allMessages: this.state.allMessages.map(m => {
        if (toMarkAsRead.includes(m.id)){
          m.read = true
        }
        return m
      })
    })
  }


  // MARK A MESSAGE AS UNREAD METHOD
  markAsUnRead = () => {
    const toMarkAsUnRead = this.state.allMessages.filter(m => m.selected).map(x => x.id)

    const patchItem = {
      "messageIds": toMarkAsUnRead,
      "command": "read",
      "read": false
    }
    this.patch(patchItem)

    this.setState({
      allMessages: this.state.allMessages.map(m => {
        if (toMarkAsUnRead.includes(m.id)){
          m.read = false
        }
        return m
      })
    })
  }

  // APPLY A LABEL METHOD
  applyLabel = (newLabel) => {
    const toApplyLabel = this.state.allMessages.filter(m => m.selected).map(x => x.id)
    const patchItem = {
      "messageIds": toApplyLabel,
      "command": "addLabel",
      "label": newLabel
    }
    this.patch(patchItem)

    this.setState({
      allMessages: this.state.allMessages.map(m => {
        if (toApplyLabel.includes(m.id)){
          m.labels = m.labels.includes(newLabel) ? m.labels.concat([]) : m.labels.concat(newLabel)
        }
        return m
      })
    })
  }


  // REMOVE A LABEL METHOD
  removeLabel = (labelToRemove) => {
    const toRemoveLabel = this.state.allMessages.filter(m => m.selected).map(x => x.id)

    const patchItem = {
      "messageIds": toRemoveLabel,
      "command": "removeLabel",
      "label": labelToRemove
    }
    this.patch(patchItem)

    this.setState({
      allMessages: this.state.allMessages.filter(m => {
        if (toRemoveLabel.includes(m.id)){
          m.labels = m.labels.filter(l => l !== labelToRemove)
        }
        return m
      })
    })
  }

  // DELETE A MESSAGE MEHTHOD
  deleteMessage = () => {
    const messagesIdToDelete = this.state.allMessages.filter(m => m.selected).map(x => x.id)

    const patchItem = {
      "messageIds": messagesIdToDelete,
      "command": "delete"
    }
    this.patch(patchItem)

    this.setState({
      allMessages: this.state.allMessages.filter(m => {
        return !messagesIdToDelete.includes(m.id) === true
      })
    })
  }

  // METHODS TO OPEN AND CLOSE THE COMPOSE A MESSAGE AREA
  openCloseCompose = () => {
    this.setState({ composeIsOpen: !this.state.composeIsOpen })
  }

  isComposeOpen = () => {
    return this.state.composeIsOpen
  }

  // METHOD TO OPEN AND CLOSE THE MESSAGE BODY AREA
  openCloseBody = id => {
    const itemToChange = this.state.allMessages.filter((message) => message.id === id)[0]
    const i = this.state.allMessages.findIndex(message => message.id === id)
    const firstHalf = this.state.allMessages.slice(0, i)
    const secondHalf = this.state.allMessages.slice(i + 1)
    if(itemToChange.bodyIsOpen){
      itemToChange.bodyIsOpen = false
      this.setState({
        allMessages: firstHalf.concat([itemToChange], secondHalf)
      })
    } else {
      itemToChange.bodyIsOpen = true
      this.setState({
        allMessages: firstHalf.concat([itemToChange], secondHalf)
      })
    }
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
          deleteMessage={ this.deleteMessage }
          openCloseCompose={ this.openCloseCompose }
          isComposeOpen={ this.isComposeOpen }
          postNewItem={ this.postNewItem }
          />

        <MessageList
           changeCheckState={ this.changeCheckState }
           changeStarState={ this.changeStarState }
           allMessages={ this.state.allMessages }
           openCloseBody={ this.openCloseBody }
         />

      </div>
    );
  }
}

export default App;
