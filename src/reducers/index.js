import { combineReducers } from 'redux'
import { messages } from './messages'
import { composeForm } from './composeForm'

const rootReducer = combineReducers({  
  messages,
  composeForm
})

export default rootReducer
