export const getAllMessages = (state = { allMessages: [] }, action) => {
    switch (action.type) {
      case 'GET_ALL_MESSAGES':
         return {
           ...state,
           allMessages: action.payload
         }
      default:
       return state;
    }
}
