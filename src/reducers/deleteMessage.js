export const deleteMessage = (state = { allMessages: [] }, action) => {
    const messagesIdToDelete = state.allMessages.filter(m => m.selected).map(x => x.id)
    switch(action.type){
      case 'DELETE_MESSAGE':
          return {...state,
            allMessages: state.allMessages.filter(m => !messagesIdToDelete.includes(m.id) === true )
          }
      default:
       return state
    }
  }
