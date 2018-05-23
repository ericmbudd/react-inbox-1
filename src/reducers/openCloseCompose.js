export const openCloseCompose = (state, action) => {
  switch(action.type){
    case 'OPEN_CLOSE_COMPOSE':
      return {...state,  composeIsOpen: !state.composeIsOpen }
    default:
      return state
  }
}
