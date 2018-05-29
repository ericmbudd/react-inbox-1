export const deleteMessage = (messages) => dispatch => {
  const messagesIdToDelete = messages.filter(m => m.selected).map(x => x.id)
  return dispatch({
    type: 'DELETE_MESSAGE',
    payload: messages.filter(m => !messagesIdToDelete.includes(m.id) === true )
  })
}
