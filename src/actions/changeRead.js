export const clickMarkAsRead = (id, messages) => dispatch => {
    return dispatch({
      type: 'CLICK_MARK_AS_READ',
      payload: messages.map(m => {
          if (id === m.id){
            m.read = true
          }
          return m
        })
     })
}

export const markAsRead = (messages) => dispatch => {
  const toMarkAsRead = messages.filter(m => m.selected).map(x => x.id)
  return dispatch({
    type: 'MARK_AS_READ',
    payload: messages.map(m => {
        if (toMarkAsRead.includes(m.id)){
          m.read = true
        }
        return m
      })
    })
}

export const markAsUnRead = (messages) => dispatch => {
    const toMarkAsUnRead = messages.filter(m => m.selected).map(x => x.id)
    return dispatch({
      type: 'MARK_AS_UNREAD',
      payload: messages.map(m => {
        if (toMarkAsUnRead.includes(m.id)){
          m.read = false
        }
        return m
      })
    })
}
