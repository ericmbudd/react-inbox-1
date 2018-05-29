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

export const messages = ( state={ messages: [] }, action) => {
  switch(action.type){
    case GET_ALL_MESSAGES:
       return {
         ...state,
         messages: action.payload
       }

     case ADD_NEW_LABEL:
      const toApplyLabel = state.messages.filter(m => m.selected).map(x => x.id)
       return {
         ...state,
         messages: state.messages.map(m => {
           if (toApplyLabel.includes(m.id)){
             m.labels = m.labels.includes(action.newLabel)
               ? m.labels
               : m.labels.concat(action.newLabel)
           }
           return m
         })
       }

     case REMOVE_LABEL:
      const toRemoveLabel = state.messages.filter(m => m.selected).map(x => x.id)
       return {
         ...state,
         messages: state.messages.filter(m => {
           if (toRemoveLabel.includes(m.id)){
             m.labels = m.labels.filter(l => l !== action.labelToRemove)
           }
           return m
         })
       }
     case CHANGE_STAR_STATE:
        const itemToChange = state.messages.filter((message) => message.id === action.id)[0]
        const i = state.messages.findIndex(message => message.id === action.id)
        let firstHalf = state.messages.slice(0, i)
        let secondHalf = state.messages.slice(i + 1)
        if(itemToChange.starred){
          itemToChange.starred = false
            return {...state,
            messages: firstHalf.concat([itemToChange], secondHalf)
          }
        } else {
          itemToChange.starred = true
            return {...state,
            messages: firstHalf.concat([itemToChange], secondHalf)
          }
        }

     case CHANGE_CHECK_STATE:
          if(itemToChange.selected){
              itemToChange.selected = false
              return {...state, messages: firstHalf.concat([itemToChange], secondHalf)}
          } else {
              itemToChange.selected = true
              return {...state, messages: firstHalf.concat([itemToChange], secondHalf)}
            }

      case CLICK_MARK_AS_READ:
        return {...state,
          messages: state.messages.map(m => {
              if (action.id === m.id){
                m.read = true
              }
              return m
            })
          }

      case MARK_AS_READ:
        const toMarkAsRead = state.messages.filter(m => m.selected).map(x => x.id)
        return {...state,
          messages: state.messages.map(m => {
            if (toMarkAsRead.includes(m.id)){
              m.read = true
            }
            return m
          })
        }

      case MARK_AS_UNREAD:
        const toMarkAsUnRead = state.messages.filter(m => m.selected).map(x => x.id)
        return {...state,
          messages: state.messages.map(m => {
            if (toMarkAsUnRead.includes(m.id)){
              m.read = false
            }
            return m
          })
        }

      case DELETE_MESSAGE:
          const messagesIdToDelete = state.messages.filter(m => m.selected).map(x => x.id)
          return {...state,
            messages: state.messages.filter(m => !messagesIdToDelete.includes(m.id) === true )
          }

      case OPEN_CLOSE_BODY:
        firstHalf = state.messages.slice(0, i).map(x => x.bodyIsOpen = false)
        secondHalf = state.messages.slice(i + 1).map(x => x.bodyIsOpen = false)
        if(itemToChange.bodyIsOpen){
          itemToChange.bodyIsOpen = false
            return {...state,
              messages: firstHalf.concat([itemToChange], secondHalf)
            }
        } else {
          itemToChange.bodyIsOpen = true
             return {...state,
               messages: firstHalf.concat([itemToChange], secondHalf)
             }
        }

      case SELECT_ALL_MESSAGES:
            if(state.messages.filter(m => m.selected === true).length < state.messages.length){
                return {...state,
                 messages: state.messages.map(m => {
                    return {...m, selected: true}
                 })
                }
            } else {
              return {...state,
                messages: state.messages.map(m => {
                  return {...m, selected: false}
                })
             }
           }

      case PATCH_ITEM:
        return {...state, messages: action.payload }

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
            return {...state, messages: state.messages.concat([res])}
      default:
        return state
  }
}
