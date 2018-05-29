import { IS_COMPOSE_OPEN, OPEN_CLOSE_COMPOSE } from '../constants'

export const composeForm = (state = { composeIsOpen: false }, action) => {
    switch(action.type) {
      case IS_COMPOSE_OPEN:
        return {...state.composeIsOpen}
      case OPEN_CLOSE_COMPOSE:
        return {...state,  composeIsOpen: !state.composeIsOpen }
      default:
        return state
    }
}
