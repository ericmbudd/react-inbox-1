export const getAllMessages = () => {
  return dispatch => {
    fetch("http://localhost:8082/api/messages")
      .then(response => response.json())
      .then(json => json._embedded.messages)
      .then(result => {
        dispatch({ type: 'GET_ALL_MESSAGES', payload })
      })
      .catch(error => {
        dispatch({ type: 'FAIL', payload: undefined})
      })
  }
}
