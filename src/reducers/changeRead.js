export const clickMarkAsRead = (state, action) => {
  switch (action.type) {
    case: 'CLICK_MARK_AS_READ'
      return {
        {...state,
        allMessages: state.allMessages.map(m => {
            if (action.id === m.id){
              m.read = true
            }
            return m
          })
        }
      }
    default:
      return state
  }
}

export const markAsRead = (state, action) => {
  const toMarkAsRead = state.allMessages.filter(m => m.selected).map(x => x.id)
  switch (action.type) {
    case: 'MARK_AS_READ'
      return {
        {...state,
        allMessages: state.allMessages.map(m => {
          if (toMarkAsRead.includes(m.id)){
            m.read = true
          }
          return m
        })}
      }
    default:
      return state
  }
}

export const markAsUnRead = (state, action) => {
  const toMarkAsUnRead = state.allMessages.filter(m => m.selected).map(x => x.id)
  switch (action.type) {
    case: 'MARK_AS_UNREAD'
      return {
        {...state,
        allMessages: state.allMessages.map(m => {
          if (toMarkAsUnRead.includes(m.id)){
            m.read = false
          }
          return m
        })}
      }
    default:
      return state
  }
}
