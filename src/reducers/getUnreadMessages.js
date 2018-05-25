export const getUnreadMessages = (state = { allMessages: [] }, action) => {
    switch(action.type) {
      case 'GET_UNREAD_MESSAGES':
       return state.allMessages.filter(m => m.read === false).length
      default:
       return state
    }
 }
