import React from 'react'
import Message from '../components/Message'


class MessageList extends React.Component {
  // onBoxCheck = (id) => {
  //   // const isChecked = !event.target.checked
  //   console.log(id)
  //   console.log('hello')
  // }

  clickStar = (event) => {
    const starIsFilled = event.target.classList.value.split(' ').includes('fa-star')
    console.log(starIsFilled)
    // console.log(this.state.allMessages.map(x => x.starred))
  }


  render() {
    return (
      <div className="container">
        {
          this.props.allMessages.map((eachMessage, id) => (
            <Message
              onBoxCheck={ this.onBoxCheck }
              isRead={ eachMessage.read ? "read" : "unread" }
              key={id} isStarred={ this.isStarred }
              eachMessage={ eachMessage }
              clickStar={ this.clickStar }
              changeStarState={ this.props.changeStarState }
            />
          ))
        }
      </div>
    )
  }
}

export default MessageList
