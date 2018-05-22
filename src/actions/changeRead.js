export const clickMarkAsRead = id => dispatch => dispatch({ type: 'CLICK_MARK_AS_READ', id })

export const markAsRead = () => dispatch => dispatch({ type: 'MARK_AS_READ'  })

export const markAsUnRead = () => dispatch => dispatch({ type: 'MARK_AS_UNREAD'  })
