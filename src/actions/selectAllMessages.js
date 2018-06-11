export const selectAllMessages = messages => dispatch => {
    let updatedMessages = null
    if(messages.filter(m => m.selected === true).length < messages.length){
      messages.map(m => m.selected = true)
      updatedMessages = messages
    } else {
      messages.map(m => m.selected = false)
      updatedMessages = messages
    }
  return dispatch({
    type: 'SELECT_ALL_MESSAGES',
    payload: updatedMessages
  })
}
