export const getUnreadMessages = (state, action) => {
   switch(action.type) {
     case: 'GET_UNREAD_MESSAGES'
      return state.allMessages.filter(m => m.read === false).length
     default:
      return state
   }
 }
