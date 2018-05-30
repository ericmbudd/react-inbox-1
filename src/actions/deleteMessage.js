export const deleteMessage = (messages, patchFunction) => dispatch => {
  const messagesIdToDelete = messages.filter(m => m.selected).map(x => x.id)

  const objectToPatch = {
    "messageIds": messagesIdToDelete,
    "command": "delete"
  }
  patchFunction(objectToPatch)

  return dispatch({
    type: 'DELETE_MESSAGE',
    payload: messages.filter(m => !messagesIdToDelete.includes(m.id) === true )
  })
}
