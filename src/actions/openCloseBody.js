export const openCloseBody = (id, messages, patchFunction) => dispatch => {
  const newMessages = messages.map(m => {
      m.bodyIsOpen === false
      return m
  })
  const itemToChange = newMessages.filter((message) => message.id === id)[0]
  const i = newMessages.findIndex(message => message.id === id)
  const firstHalf = newMessages.slice(0, i)
  const secondHalf = newMessages.slice(i + 1)


  const updatedMessages = () => {
    if(itemToChange.bodyIsOpen){
      itemToChange.bodyIsOpen = false
      return firstHalf.concat([itemToChange], secondHalf)
    } else {
      itemToChange.bodyIsOpen = true
      return firstHalf.concat([itemToChange], secondHalf)
    }
  }

  const objectToPatch = {
    "messageIds": [id],
    "command": "openCloseBody",
    "bodyIsOpen": !itemToChange.bodyIsOpen
  }
  patchFunction(objectToPatch)

  return dispatch({
      type: 'OPEN_CLOSE_BODY',
      payload: updatedMessages()
  })
}
