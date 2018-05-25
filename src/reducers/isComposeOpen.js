export const isComposeOpen = (state = { composeIsOpen: false }, action) => {
    switch(action.type) {
      case 'IS_COMPOSE_OPEN':
        return { ...state, composeIsOpen: !state.composeIsOpen }
      default:
        return state
    }
}
