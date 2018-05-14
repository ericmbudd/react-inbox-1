import React from 'react'

class Toolbar extends React.Component {
    render() {
      return (
        <div className="container">
          <div className="row toolbar">
            <div className="col-md-12">
              <p className="pull-right">
                <span className="badge badge">{this.props.unreadMessages()}</span>
                {this.props.unreadMessages() > 1 ? "unread messages" : "unread message"}
              </p>

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

              <button className="btn btn-default">
                Mark As Read
              </button>

              <button className="btn btn-default">
                Mark As Unread
              </button>

              <select className="form-control label-select">
                <option>Apply label</option>
                <option value="dev">dev</option>
                <option value="personal">personal</option>
                <option value="gschool">gschool</option>
              </select>

              <select className="form-control label-select">
                <option>Remove label</option>
                <option value="dev">dev</option>
                <option value="personal">personal</option>
                <option value="gschool">gschool</option>
              </select>

              <button className="btn btn-default">
                <i className="fa fa-trash-o"></i>
              </button>
            </div>
          </div>
        </div>
      )
    }
}

export default Toolbar
