export openCloseBody = (state, action) => {
  const itemToChange = state.allMessages.filter((message) => message.id === action.id)[0]
  const i = state.allMessages.findIndex(message => message.id === action.id)
  const firstHalf = state.allMessages.slice(0, i).map(x => x.bodyIsOpen = false)
  const secondHalf = state.allMessages.slice(i + 1).map(x => x.bodyIsOpen = false)
   switch(action.type) {
     case: 'OPEN_CLOSE_BODY'
       if(itemToChange.bodyIsOpen){
         itemToChange.bodyIsOpen = false
           return {...state,
             allMessages: firstHalf.concat([itemToChange], secondHalf)
           }
       } else {
         itemToChange.bodyIsOpen = true
            return {...state,
              allMessages: firstHalf.concat([itemToChange], secondHalf)
            }
       }
     default:
      return state
   }
 }
