export const changeCheckState = (state, action) => {
  const itemToChange = state.allMessages.filter((message) => message.id === action.id)[0]
  const i = state.allMessages.findIndex(message => message.id === action.id)
  const firstHalf = state.allMessages.slice(0, i)
  const secondHalf = state.allMessages.slice(i + 1)
   switch (action.type) {
     case: 'CHANGE_CHECK_STATE'
        return {
          if(itemToChange.selected){
              itemToChange.selected = false
              {...state, allMessages: firstHalf.concat([itemToChange], secondHalf)}
          } else {
              itemToChange.selected = true
              {...state, allMessages: firstHalf.concat([itemToChange], secondHalf)}
            }
        }
     default:
      return state
   }
 }
