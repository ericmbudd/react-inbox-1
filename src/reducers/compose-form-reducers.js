import { OPEN_CLOSE_COMPOSE } from '../constants'

export const composeForm = (state = { composeIsOpen: false }, action) => {
    switch(action.type) {
      case OPEN_CLOSE_COMPOSE:
        return {...state,  composeIsOpen: !state.composeIsOpen }
      default:
        return state
    }
}
