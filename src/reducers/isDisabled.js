export const isDisabled = (state = { allMessages: [] }, action) => {
    switch(action.type){
      case 'IS_DISABLED':
         return state.allMessages.filter(m => m.selected === true).length < 1 ? 'true' : ""
      default:
       return state
    }
 }
