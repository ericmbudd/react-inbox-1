export const selectAllMessages = messages => dispatch => {
  const updatedMessages = () => {
    if(messages.filter(m => m.selected === true).length < messages.length){
      messages.map(m => m.selected = true)
      return messages
    } else {
      messages.map(m => m.selected = false)
      return messages
    }
  }


  return dispatch({
    type: 'SELECT_ALL_MESSAGES',
    payload: updatedMessages()
  })
}
