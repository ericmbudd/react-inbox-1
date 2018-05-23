export const patchItem = (objectToPatch) => {
  return async dispatch => {
      const patch = await fetch("http://localhost:8082/api/messages", {
        method: 'PATCH',
        body: JSON.stringify(objectToPatch),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      })
      const updatedMessagesRequest = await fetch("http://localhost:8082/api/messages")
      const updatedMessagesJSON = await updatedMessagesRequest.json()
      const updatedMessages = await updatedMessagesJSON._embedded.messages
      dispatch({
        type: 'PATCH_ITEM',
        payload: updatedMessages
       })
  }
}
