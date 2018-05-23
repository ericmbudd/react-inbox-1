export const patchItem = (state, action) => {
   switch (action.type) {
     case: 'PATCH_ITEM'
       return {...state, allMessages: action.payload }
     default:
      return state
   }
 }
