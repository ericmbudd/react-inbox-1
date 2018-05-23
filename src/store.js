import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import logger from 'redux-logger'


const initialState = { allMessages: [], bodyIsOpen: false, composeIsOpen: false }
const middleware = [
  logger,
  thunk,
]

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
)

export default store
