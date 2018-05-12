import React from 'react'

class Message extends React.Component {



  render() {
    return (
      <div className={`row message ${this.props.isRead}`}>
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input
                type="checkbox"
                defaultChecked={this.props.eachMessage.selected ? "checked" : ""}
              />
            </div>
            <div className="col-xs-2" onClick={ this.props.changeStarState.bind(null, this.props.eachMessage.id) } >
              {
                this.props.eachMessage.starred ?
                <i className="star fa fa-star"></i> :
                <i className="star fa fa-star-o"></i>
              }
            </div>
          </div>
        </div>
        <div className="col-xs-11">
          <a href="#">
            {this.props.eachMessage.subject}
          </a>
        </div>
      </div>
    )
  }
}

export default Message
