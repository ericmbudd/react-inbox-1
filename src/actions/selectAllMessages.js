export const selectAllMessages = () => dispatch => {
  const updatedMessages = () => {
    if(this.messages.all.filter(m => m.selected === true).length < this.messages.all.length){
      this.messages.all.map(m => {
        return {...m, selected: true}
      })
    } else {
      this.messages.all.map(m => {
        return {...m, selected: false}
      })
    }
  }

  return dispatch({
    type: 'SELECT_ALL_MESSAGES',
    payload: updatedMessages()
  })
}
