export const patchItem = (state = { allMessages: [] }, action) => {
    switch (action.type) {
      case 'PATCH_ITEM':
        return {...state, allMessages: action.payload }
      default:
       return state
    }
 }
