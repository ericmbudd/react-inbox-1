export const changeStar = (id, messages) => dispatch => {
  const itemToChange = messages.filter((message) => message.id === id)[0]
  const i = messages.findIndex(message => message.id === id)
  let firstHalf = messages.slice(0, i)
  let secondHalf = messages.slice(i + 1)

  const updatedMessages = () => {
    if(itemToChange.starred) {
        itemToChange.starred = false
        return firstHalf.concat([itemToChange], secondHalf)
      } else {
      itemToChange.starred = true
        return firstHalf.concat([itemToChange], secondHalf)
      }
    }

  return  dispatch({
     type: 'CHANGE_STAR_STATE',
     payload: updatedMessages()
    })
}
