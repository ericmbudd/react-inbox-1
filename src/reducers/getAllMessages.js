export const getAllMessages = (state, action) => {
   switch (action.type) {
     case: 'GET_ALL_MESSAGES'
        return {
          ...state,
          allMessages: [...state.allMessages, action.payload]
        }
     default:
      return state;
   }
 }
