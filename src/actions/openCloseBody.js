export const openCloseBody = (id, messages) => dispatch => {
  const itemToChange = messages.filter((message) => message.id === id)[0]
  const i = messages.findIndex(message => message.id === id)
  const firstHalf = messages.slice(0, i).map(x => {
    x.bodyIsOpen = false
    return x
  })
  const secondHalf = messages.slice(i + 1).map(x => {
    x.bodyIsOpen = false
    return x
  })

  const updatedMessages = () => {
    if(itemToChange.bodyIsOpen){
      itemToChange.bodyIsOpen = false
      return firstHalf.concat([itemToChange], secondHalf)
    } else {
      itemToChange.bodyIsOpen = true
      return firstHalf.concat([itemToChange], secondHalf)
    }
  }

  return dispatch({
      type: 'OPEN_CLOSE_BODY',
      payload: updatedMessages()
  })
}
