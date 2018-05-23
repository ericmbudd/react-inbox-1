import { combineReducers } from 'redux'
import {applyLabel, removeLabel} from './addRemoveLabel'
import {changeCheckbox} from './changeCheckbox'
import {clickMarkAsRead, markAsRead, markAsUnRead} from './changeRead'
import {selectAllMessages} from './selectAllMessages'
import {changeStar} from './changeStar'
import {deleteMessage} from './deleteMessage'
import {getAllMessages} from './getAllMessages'
import {getUnreadMessages} from './getUnreadMessages'
import {isDisabled} from './isDisabled'
import {openCloseBody} from './openCloseBody'
import {patchItem} from './patchItem'
import {postNewMessage} from './postNewMessage'
import {openCloseCompose} from './openCloseCompose'
import {isComposeOpen} from './isComposeOpen'

const rootReducer = combineReducers({
  applyLabel,
  removeLabel,
  changeCheckbox,
  clickMarkAsRead,
  markAsRead,
  markAsUnRead,
  selectAllMessages,
  changeStar,
  deleteMessage,
  getAllMessages,
  getUnreadMessages,
  isDisabled,
  openCloseBody,
  patchItem,
  postNewMessage,
  openCloseCompose,
  isComposeOpen
})

export default rootReducer
