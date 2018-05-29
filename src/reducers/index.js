import { combineReducers } from 'redux'
import { messages } from './messages-reducers'
import { composeForm } from './compose-form-reducers'

const rootReducer = combineReducers({
  messages,
  composeForm
})

export default rootReducer
