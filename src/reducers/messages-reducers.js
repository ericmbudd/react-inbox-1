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
  IS_DISABLED,
  PATCH_ITEM,
  POST_NEW_MESSAGE,
  SELECT_ALL_MESSAGES,
  GET_ALL_MESSAGES,
  OPEN_CLOSE_BODY
} from '../constants'

export const messages = ( state={ allMessages: [] }, action) => {  
  switch(action.type){
    case GET_ALL_MESSAGES:
       return {
         ...state,
         allMessages: action.payload
       }

     case ADD_NEW_LABEL:
      const toApplyLabel = state.allMessages.filter(m => m.selected).map(x => x.id)
       return {
         ...state,
         allMessages: state.allMessages.map(m => {
           if (toApplyLabel.includes(m.id)){
             m.labels = m.labels.includes(action.newLabel)
               ? m.labels
               : m.labels.concat(action.newLabel)
           }
           return m
         })
       }

     case REMOVE_LABEL:
      const toRemoveLabel = state.allMessages.filter(m => m.selected).map(x => x.id)
       return {
         ...state,
         allMessages: state.allMessages.filter(m => {
           if (toRemoveLabel.includes(m.id)){
             m.labels = m.labels.filter(l => l !== action.labelToRemove)
           }
           return m
         })
       }
     case CHANGE_STAR_STATE:
        const itemToChange = state.allMessages.filter((message) => message.id === action.id)[0]
        const i = state.allMessages.findIndex(message => message.id === action.id)
        let firstHalf = state.allMessages.slice(0, i)
        let secondHalf = state.allMessages.slice(i + 1)
        if(itemToChange.starred){
          itemToChange.starred = false
            return {...state,
            allMessages: firstHalf.concat([itemToChange], secondHalf)
          }
        } else {
          itemToChange.starred = true
            return {...state,
            allMessages: firstHalf.concat([itemToChange], secondHalf)
          }
        }

     case CHANGE_CHECK_STATE:
          if(itemToChange.selected){
              itemToChange.selected = false
              return {...state, allMessages: firstHalf.concat([itemToChange], secondHalf)}
          } else {
              itemToChange.selected = true
              return {...state, allMessages: firstHalf.concat([itemToChange], secondHalf)}
            }

      case CLICK_MARK_AS_READ:
        return {...state,
          allMessages: state.allMessages.map(m => {
              if (action.id === m.id){
                m.read = true
              }
              return m
            })
          }

      case MARK_AS_READ:
        const toMarkAsRead = state.allMessages.filter(m => m.selected).map(x => x.id)
        return {...state,
          allMessages: state.allMessages.map(m => {
            if (toMarkAsRead.includes(m.id)){
              m.read = true
            }
            return m
          })
        }

      case MARK_AS_UNREAD:
        const toMarkAsUnRead = state.allMessages.filter(m => m.selected).map(x => x.id)
        return {...state,
          allMessages: state.allMessages.map(m => {
            if (toMarkAsUnRead.includes(m.id)){
              m.read = false
            }
            return m
          })
        }

      case DELETE_MESSAGE:
          const messagesIdToDelete = state.allMessages.filter(m => m.selected).map(x => x.id)
          return {...state,
            allMessages: state.allMessages.filter(m => !messagesIdToDelete.includes(m.id) === true )
          }

      case GET_UNREAD_MESSAGES:
        if(state.allMessages.length > 0){
            return state.allMessages.filter(m => m.read === false).length
        } else {
            return state
        }

      case IS_DISABLED:
        return state.allMessages.filter(m => m.selected === true).length < 1 ? 'true' : ""

      case OPEN_CLOSE_BODY:
        firstHalf = state.allMessages.slice(0, i).map(x => x.bodyIsOpen = false)
        secondHalf = state.allMessages.slice(i + 1).map(x => x.bodyIsOpen = false)
        if(itemToChange.bodyIsOpen){
          itemToChange.bodyIsOpen = false
            return {...state,
              allMessages: firstHalf.concat([itemToChange], secondHalf)
            }
        } else {
          itemToChange.bodyIsOpen = true
             return {...state,
               allMessages: firstHalf.concat([itemToChange], secondHalf)
             }
        }

      case SELECT_ALL_MESSAGES:
            if(state.allMessages.filter(m => m.selected === true).length < state.allMessages.length){
                return {...state,
                 allMessages: state.allMessages.map(m => {
                    return {...m, selected: true}
                 })
                }
            } else {
              return {...state,
                allMessages: state.allMessages.map(m => {
                  return {...m, selected: false}
                })
             }
           }

      case PATCH_ITEM:
        return {...state, allMessages: action.payload }

      case POST_NEW_MESSAGE:
          const res = fetch("http://localhost:8082/api/messages", {
                    body: JSON.stringify(action.object),
                    headers: {
                    'content-type': 'application/json'
                    },
                    method: 'POST'
                })
                .then(response => response.json())
                .catch(error => error)
                const final = res._links.self.href.substr(res._links.self.href.lastIndexOf('/') + 1)
                res[action.id] = final
            return {...state, allMessages: state.allMessages.concat([res])}
      default:
        return state
  }
}
