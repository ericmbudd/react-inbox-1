import React from 'react'

class Compose extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault()
    const subject = this.refs.subject.value
    const body = this.refs.body.value
    const itemToPost = {
      subject: subject,
      body: body,
      read: false,
      starred: false,
      labels: []
    }
    const newIdInState =  this.props.allMessages[this.props.allMessages.length - 1].id + 1
    this.props.postNewItem(itemToPost, newIdInState)
  }



  render() {
    return (
        <div className="container">
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
          </form>
        </div>
    )
  }
}

export default Compose
