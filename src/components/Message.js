import React from 'react'

class Message extends React.Component {
  render() {
    return (
      <div className={`row message ${this.props.eachMessage.read ? "read" : "unread" } ${this.props.eachMessage.selected ? "selected" : ""}`}>
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input
                onChange={ this.props.changeCheckState.bind(null, this.props.eachMessage.id) }
                type="checkbox"
                checked={this.props.eachMessage.selected ? "checked" : ""}
              />
            </div>
            <div className="col-xs-2" >
              {
                this.props.eachMessage.starred ?
                <i onClick={ this.props.changeStarState.bind(null, this.props.eachMessage.id) } className="star fa fa-star"></i> :
                <i onClick={ this.props.changeStarState.bind(null, this.props.eachMessage.id) } className="star fa fa-star-o"></i>
              }
            </div>
          </div>
        </div>
        <div className="col-xs-11">
          { this.props.eachMessage.labels.length > 0 ?
            this.props.eachMessage.labels.map((label, id) => <span key={id} className="label label-warning">{label}</span>) : ""
          }
          <a href="#">
            {this.props.eachMessage.subject}
          </a>
        </div>
      </div>
    )
  }
}

export default Message
