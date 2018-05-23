export const selectAllMessages = (state, action) => {
   switch (action.type) {
    case 'SELECT_ALL_MESSAGES':
          if(state.allMessages.filter(m => m.selected === true).length < state.allMessages.length){
              return {...state,
               allMessages: state.allMessages.map(m => {
                  return {...m, selected: true}
               })
              }
          } else {
            return {...state,
              allMessages: state.allMessages.map(m => {
                return {...m, selected: false}
              })
           }
         }
    default:
      return state
   }
 }
