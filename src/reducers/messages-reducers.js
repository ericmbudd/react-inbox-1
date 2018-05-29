import {
  GET_UNREAD_MESSAGES,
  ADD_NEW_LABEL,
  REMOVE_LABEL,
  CHANGE_CHECK_STATE,
  CLICK_MARK_AS_READ,
  MARK_AS_READ,
  MARK_AS_UNREAD,
  CHANGE_STAR_STATE,
  DELETE_MESSAGE,
  PATCH_ITEM,
  POST_NEW_MESSAGE,
  SELECT_ALL_MESSAGES,
  GET_ALL_MESSAGES,
  OPEN_CLOSE_BODY
} from '../constants'

export const messages = ( state={ all: [] }, action) => {
  switch(action.type){
    case GET_ALL_MESSAGES:
       return { ...state, all: action.payload }

     case ADD_NEW_LABEL:
       return { ...state, all: action.payload }

     case REMOVE_LABEL:
       return { ...state, all: action.payload }

     case CHANGE_STAR_STATE:
        return { ...state, all: action.payload }

     case CHANGE_CHECK_STATE:
        return { ...state, all: action.payload }

     case CLICK_MARK_AS_READ:
        return { ...state, all: action.payload }

      case MARK_AS_READ:
        return { ...state, all: action.payload }

      case MARK_AS_UNREAD:
        return { ...state, all: action.payload }

      case DELETE_MESSAGE:
        return { ...state, all: action.payload }

      case OPEN_CLOSE_BODY:
        return { ...state, all: action.payload }

      case SELECT_ALL_MESSAGES:
        return  { ...state, all: action.payload }

      case PATCH_ITEM:
        return {...state, all: action.payload }

      case POST_NEW_MESSAGE:
        return { ...state, all: action.payload }

      default:
        return state
  }
}
