import React from 'react'

class Toolbar extends React.Component {

    addLabelHandler = (event) => {
      return this.props.applyLabel(event.target.value)
    }

    removeLabelHandler = (event) => {
      return this.props.removeLabel(event.target.value)
    }

    handleSubmit = (event) => {
      event.preventDefault()
      const subject = this.refs.subject.value
      const body = this.refs.body.value
      const itemToPost = {
        subject: subject,
        body: body,
        read: false,
        starred: false,
        labels: [],
      }
      this.props.postNewItem(itemToPost)
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

              <a onClick={ this.props.openCloseCompose } className={`btn btn-${ this.props.isComposeOpen() ? "danger" : "success"}`}>
                { this.props.isComposeOpen() ? <i className="fa fa-minus"></i> : <i className="fa fa-plus"></i> }
              </a>

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
            <form onSubmit={ this.handleSubmit } className="form-horizontal well">
              <div className="form-group">
                <div className="col-sm-8 col-sm-offset-2">
                  <h4>Compose Message</h4>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject" className="col-sm-2 control-label">Subject</label>
                <div className="col-sm-8">
                  <input ref="subject" type="text" className="form-control" id="subject" placeholder="Enter a subject" name="subject" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="body" className="col-sm-2 control-label">Body</label>
                <div className="col-sm-8">
                  <textarea ref="body" name="body" id="body" className="form-control"></textarea>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-8 col-sm-offset-2">
                  <input type="submit" value="Send" className="btn btn-primary" />
                </div>
              </div>
            </form> :
            ""
          }
        </div>
      )
    }
}

export default Toolbar
