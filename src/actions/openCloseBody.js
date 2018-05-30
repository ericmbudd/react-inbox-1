export const openCloseBody = (id, messages, patchFunction) => dispatch => {
  const itemToChange = messages.filter((message) => message.id === id)[0]
  const i = messages.findIndex(message => message.id === id)
  const firstHalf = messages.slice(0, i)
  const secondHalf = messages.slice(i + 1)


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
