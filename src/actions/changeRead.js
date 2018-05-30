export const clickMarkAsRead = (id, messages, patchFunction) => dispatch => {

  const objectToPatch = {
    "messageIds": [id],
    "command": "read",
    "read": true
  }
  patchFunction(objectToPatch)

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

export const markAsRead = (messages, patchFunction) => dispatch => {
  const toMarkAsRead = messages.filter(m => m.selected).map(x => x.id)

  const objectToPatch = {
    "messageIds": toMarkAsRead,
    "command": "read",
    "read": true
  }
  patchFunction(objectToPatch)

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

export const markAsUnRead = (messages, patchFunction) => dispatch => {
    const toMarkAsUnRead = messages.filter(m => m.selected).map(x => x.id)

    const objectToPatch = {
      "messageIds": toMarkAsUnRead,
      "command": "read",
      "read": false
    }
    patchFunction(objectToPatch)

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
