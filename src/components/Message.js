import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { clickMarkAsRead } from '../actions/changeRead'
import { changeStar } from '../actions/changeStar'
import { changeCheckbox } from '../actions/changeCheckbox'
import { openCloseBody } from '../actions/openCloseBody'
import { patchItem } from '../actions/patchItem'

class Message extends React.Component {

  handleClickMarkAsRead = ( id, messages ) => {
    this.props.clickMarkAsRead(id, messages, this.props.patchItem)
  }

  handleChangeStar = ( id, messages ) => {
    this.props.changeStar(id, messages, this.props.patchItem)
  }

  render() {
    return (
      <div className={`row message ${this.props.eachMessage.read ? "read" : "unread" } ${this.props.eachMessage.selected ? "selected" : ""}`}>
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input
                onChange= {this.props.changeCheckbox.bind(null, this.props.eachMessage.id, this.props.all)}
                type="checkbox"
                checked={ this.props.eachMessage.selected ? 'checked' : '' }
              />
            </div>
            <div className="col-xs-2" >
              {
                this.props.eachMessage.starred ?
                <i onClick={ this.handleChangeStar.bind(null, this.props.eachMessage.id, this.props.all) } className="star fa fa-star"></i> :
                <i onClick={ this.handleChangeStar.bind(null, this.props.eachMessage.id, this.props.all) } className="star fa fa-star-o"></i>
              }
            </div>
          </div>
        </div>
            <div onClick={ this.handleClickMarkAsRead.bind(null, this.props.eachMessage.id, this.props.all ) } className="col-xs-11">
              { this.props.eachMessage.labels.length > 0 ?
                this.props.eachMessage.labels.map((label, id) => <span key={id} className="label label-warning">{label}</span>) : ""
              }
              <div className="message" onClick={ this.props.openCloseBody.bind(null, this.props.eachMessage.id, this.props.all, this.props.patchItem) }>
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
      </div>
    )
  }
}

const mapStateToProps = state => state.messages

const mapDispatchToProps = (dispatch) => bindActionCreators({
  clickMarkAsRead,
  changeStar,
  changeCheckbox,
  openCloseBody,
  patchItem
 }, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Message)
