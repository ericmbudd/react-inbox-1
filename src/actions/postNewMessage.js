export const postNewMessage = (id, object, messages) => {
  return async dispatch => {
    const res = await fetch("http://localhost:8082/api/messages", {
              body: JSON.stringify(object),
              headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
              },
              method: 'POST'
          })
      const json = await res.json()
      // 
      // const final = json._links.self.href.substr(json._links.self.href.lastIndexOf('/') + 1)
      // json[id] = final

      dispatch({
        type: 'POST_NEW_MESSAGE',
        payload: messages.concat([json])
      })
  }
}
