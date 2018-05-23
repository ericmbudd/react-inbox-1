import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { clickMarkAsRead } from '../actions/clickMarkAsRead'
import { changeStar } from '../actions/changeStar'
import { changeCheckbox } from '../actions/changeCheckbox'
import { openCloseBody } from '../actions/openCloseBody'

class Message extends React.Component {

  handleClick = () => {
    this.props.clickMarkAsRead(this.props.eachMessage.id)
  }

  render() {
    return (
      <div className={`row message ${this.props.eachMessage.read ? "read" : "unread" } ${this.props.eachMessage.selected ? "selected" : ""}`}>
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input
                onChange={ this.props.changeCheckbox.bind(null, this.props.eachMessage.id) }
                type="checkbox"
                checked={this.props.eachMessage.selected ? "checked" : ""}
              />
            </div>
            <div className="col-xs-2" >
              {
                this.props.eachMessage.starred ?
                <i onClick={ this.props.changeStar.bind(null, this.props.eachMessage.id) } className="star fa fa-star"></i> :
                <i onClick={ this.props.changeStar.bind(null, this.props.eachMessage.id) } className="star fa fa-star-o"></i>
              }
            </div>
          </div>
        </div>
        <Router>
          <Link to={`/messages/${this.props.eachMessage.id}`}>
            <div onClick={ this.handleClick } className="col-xs-11">
              { this.props.eachMessage.labels.length > 0 ?
                this.props.eachMessage.labels.map((label, id) => <span key={id} className="label label-warning">{label}</span>) : ""
              }
              <div className="message" onClick={ this.props.openCloseBody.bind(null, this.props.eachMessage.id) }>
                {this.props.eachMessage.subject}
              </div>
              {
                this.props.eachMessage.bodyIsOpen ?
                <div className="row message-body">
                  <div className="col-xs-11 col-xs-offset-1">
                    { this.props.eachMessage.body }
                  </div>
                </div>
                :
                ""
              }
            </div>
          </Link>
        </Router>
      </div>
    )
  }
}

const mapStateToProps = state = {
  state.allMessages.map(eachMessage => {
      return { eachMessage }
  })
}

const mapDispatchToProps = dispatch => ({
  clickMarkAsRead,
  changeStar,
  changeCheckbox,
  openCloseBody
})


export default connect(mapStateToProps, mapDispatchToProps)(Message)
