import React from 'react'
import { connect } from 'react-redux'
import Compose from './Compose'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { addLabel, removeLabel } from '../actions/addRemoveLabel'
import { getUnreadMessages } from '../actions/getUnreadMessages'
import { isComposeOpen } from '../actions/isComposeOpen'
import { openCloseCompose } from '../actions/openCloseCompose'
import { selectAllMessages } from '../actions/selectAllMessages'
import { markAsRead, markAsUnRead } from '../actions/changeRead'
import { isDisabled } from '../actions/isDisabled'
import { deleteMessage } from '../actions/deleteMessage'


class Toolbar extends React.Component {

    addLabelHandler = (event) => {
      return this.props.applyLabel(event.target.value)
    }

    removeLabelHandler = (event) => {
      return this.props.removeLabel(event.target.value)
    }


    render() {
      return (
        <div className="container">
          <div className="row toolbar">
            <div className="col-md-12">
              <p className="pull-right">
                <span className="badge badge">{this.props.unreadMessages()}</span>
                {this.props.unreadMessages() === 1 ? "unread message" : "unread messages"}
              </p>
                { this.props.isComposeOpen() ?
                  <Link to="/">
                    <button onClick={ this.props.openCloseCompose } className={`btn btn-${ this.props.isComposeOpen() ? "danger" : "success"}`}>
                        <i className="fa fa-minus"></i>
                    </button>
                  </Link>
                  :
                  <Link to="/compose">
                    <button onClick={ this.props.openCloseCompose } className={`btn btn-${ this.props.isComposeOpen() ? "danger" : "success"}`}>
                      <i className="fa fa-plus"></i>
                    </button>
                  </Link>
                  }
              <button onClick={ this.props.selectAllMessages } className="btn btn-default">
                {
                  this.props.allMessages.filter(m => m.selected).length > 0 &&
                  this.props.allMessages.filter(m => m.selected).length < 8 ?
                  <i className="fa fa-minus-square-o"></i> :
                  this.props.allMessages.filter(m => m.selected).length < 1 ?
                  <i className="fa fa-square-o"></i> :
                  <i className="fa fa-check-square-o"></i>
                }
              </button>

              <button onClick={ this.props.markAsRead } className="btn btn-default" disabled={ this.props.isDisabled() }>
                Mark As Read
              </button>

              <button onClick={ this.props.markAsUnRead } className="btn btn-default" disabled={ this.props.isDisabled() }>
                Mark As Unread
              </button>

              <select onChange={ this.addLabelHandler } className="form-control label-select"
                disabled={ this.props.isDisabled() } >
                <option>Apply label</option>
                <option value="dev">dev</option>
                <option value="personal">personal</option>
                <option value="gschool">gschool</option>
              </select>

              <select onChange={ this.removeLabelHandler } className="form-control label-select"
                disabled={ this.props.isDisabled() } >
                <option>Remove label</option>
                <option value="dev">dev</option>
                <option value="personal">personal</option>
                <option value="gschool">gschool</option>
              </select>

              <button className="btn btn-default" onClick={ this.props.deleteMessage } disabled={ this.props.isDisabled() }>
                <i className="fa fa-trash-o"></i>
              </button>
            </div>
          </div>

          {
            this.props.isComposeOpen() ?
            <Router>
              <Route exact path="/compose" render={() => (
                  <Compose />
              )} />
            </Router>
            : ""
          }
        </div>
      )
    }
}

const mapStateToProps = state => {
  return {
    allMessages: state.allMessages
  }
}

const mapDispatchToProps = dispatch => ({
      addLabel,
      removeLabel,
      getUnreadMessages,
      isComposeOpen,
      openCloseCompose,
      selectAllMessages,
      markAsRead,
      markAsUnRead,
      isDisabled,
      deleteMessage
})

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar)
