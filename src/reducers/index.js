import { combineReducers } from 'redux'
import addRemoveLabel from './addRemoveLabel'
import changeCheckbox from './changeCheckbox'
import changeRead from './changeRead'
import changeSelected from './changeSelected'
import changeStar from './changeStar'
import deleteMessage from './deleteMessage'
import getAllMessages from './getAllMessages'
import getUnreadMessages from './getUnreadMessages'
import isDisabled from './isDisabled'
import openCloseBody from './openCloseBody'
import patchItem from './patchItem'
import postNewMessage from './postNewMessage'

const rootReducer = combineReducers({
  addRemoveLabel,
  changeCheckbox,
  changeRead,
  changeSelected,
  changeStar,
  deleteMessage,
  getAllMessages,
  getUnreadMessages,
  isDisabled,
  openCloseBody,
  patchItem,
  postNewMessage
})

export default rootReducer
