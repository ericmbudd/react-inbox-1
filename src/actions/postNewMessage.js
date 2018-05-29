export const postNewMessage = (id, object) => dispatch => {
  const res = fetch("http://localhost:8082/api/messages", {
            body: JSON.stringify(object),
            headers: {
            'content-type': 'application/json'
            },
            method: 'POST'
        })
        .then(response => response.json())
        .catch(error => error)

        const final = res._links.self.href.substr(res._links.self.href.lastIndexOf('/') + 1)
        res[id] = final

    dispatch({
      type: 'POST_NEW_MESSAGE',
      payload: this.messages.all.concat([res])
    })
  }
