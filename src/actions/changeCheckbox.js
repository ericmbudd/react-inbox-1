export const changeCheckbox = (id, messages) => dispatch => {
      const itemToChange = messages.filter((message) => message.id === id)[0]
      const i = messages.findIndex(message => message.id === id)
      let firstHalf = messages.slice(0, i)
      let secondHalf = messages.slice(i + 1)

      const updatedMessages = () => {
        if(itemToChange.selected){
            itemToChange.selected = false
            return firstHalf.concat([itemToChange], secondHalf)
        } else {
            itemToChange.selected = true
            return firstHalf.concat([itemToChange], secondHalf)
          }
      }

      return dispatch({
        type: 'CHANGE_CHECK_STATE',
        payload: updatedMessages()
      })
  }
