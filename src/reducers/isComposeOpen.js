export const isComposeOpen = (state, action) => {
  switch(action.type) {
    case: 'IS_COMPOSE_OPEN'
      return state.composeIsOpen
    default:
      return state
  }
}
