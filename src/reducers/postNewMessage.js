export const postNewItem = (state, action) => {
  switch(action.type) {
    case: 'POST_NEW_MESSAGES'
        const res = await fetch("http://localhost:8082/api/messages", {
                  body: JSON.stringify(action.object),
                  headers: {
                  'content-type': 'application/json'
                  },
                  method: 'POST'
              })
              .then(response => response.json())
              .catch(error => error)
              const final = res._links.self.href.substr(res._links.self.href.lastIndexOf('/') + 1)
              res[action.id] = final
          return {...state, allMessages: state.allMessages.concat([res])}
    default:
      return state
  }
}
