import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addLabel, removeLabel } from '../actions/addRemoveLabel'
import { isComposeOpen } from '../actions/isComposeOpen'
import { openCloseCompose } from '../actions/openCloseCompose'
import { selectAllMessages } from '../actions/selectAllMessages'
import { markAsRead, markAsUnRead } from '../actions/changeRead'
import { deleteMessage } from '../actions/deleteMessage'
import Compose from './Compose'


class Toolbar extends React.Component {

    addLabelHandler = (event) => {
      return this.props.applyLabel(event.target.value)
    }

    removeLabelHandler = (event) => {
      return this.props.removeLabel(event.target.value)
    }

    isDisabled = () => {
      return this.props.messages.filter(m => m.selected === true).length < 1 ? 'true' : ""
    }

    getUnreadMessages = () => {
      return this.props.messages.filter(m => m.read === false).length
    }

    render() {
      return (
        <div className="container">
          <div className="row toolbar">
            <div className="col-md-12">
              <p className="pull-right">
                <span className="badge badge">{ this.getUnreadMessages().messages }</span>
              {this.getUnreadMessages() === 1 ? "unread message" : "unread messages"}
              </p>
                { this.props.isComposeOpen()
                  ?
                    <button onClick={ this.props.openCloseCompose } className={`btn btn-${ this.props.isComposeOpen() ? "danger" : "success"}`}>
                        <i className="fa fa-minus"></i>
                    </button>
                  :
                    <button onClick={ this.props.openCloseCompose } className={`btn btn-${ this.props.isComposeOpen() ? "danger" : "success"}`}>
                      <i className="fa fa-plus"></i>
                    </button>
                  }
              <button onClick={ this.props.selectAllMessages } className="btn btn-default">
                {
                  this.props.messages.filter(m => m.selected).length > 0 &&
                  this.props.messages.filter(m => m.selected).length < 8 ?
                  <i className="fa fa-minus-square-o"></i> :
                  this.props.messages.filter(m => m.selected).length < 1 ?
                  <i className="fa fa-square-o"></i> :
                  <i className="fa fa-check-square-o"></i>
                }
              </button>

              <button onClick={ this.props.markAsRead } className="btn btn-default" disabled={ this.isDisabled() }>
                Mark As Read
              </button>

              <button onClick={ this.props.markAsUnRead } className="btn btn-default" disabled={ this.isDisabled() }>
                Mark As Unread
              </button>

              <select onChange={ this.addLabelHandler } className="form-control label-select"
                disabled={ this.isDisabled() } >
                <option>Apply label</option>
                <option value="dev">dev</option>
                <option value="personal">personal</option>
                <option value="gschool">gschool</option>
              </select>

              <select onChange={ this.removeLabelHandler } className="form-control label-select"
                disabled={ this.isDisabled() } >
                <option>Remove label</option>
                <option value="dev">dev</option>
                <option value="personal">personal</option>
                <option value="gschool">gschool</option>
              </select>

              <button className="btn btn-default" onClick={ this.props.deleteMessage } disabled={ this.isDisabled() }>
                <i className="fa fa-trash-o"></i>
              </button>
            </div>
          </div>

          {
            this.props.isComposeOpen()
            ? <Compose />
            : ""
          }
        </div>
      )
    }
}

const mapStateToProps = state => state.messages

const mapDispatchToProps = dispatch => bindActionCreators({
  addLabel,
  removeLabel,
  isComposeOpen,
  openCloseCompose,
  selectAllMessages,
  markAsRead,
  markAsUnRead,
  deleteMessage
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar)
