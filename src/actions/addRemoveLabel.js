export const addLabel = (newLabel, messages) => dispatch => {
    const toApplyLabel = messages.filter(m => m.selected).map(x => x.id)
    const updatedMessages = messages.map(m => {
      if (toApplyLabel.includes(m.id)){
        m.labels = m.labels.includes(newLabel)
          ? m.labels
          : m.labels.concat(newLabel)
      }
      return m
    })
    return dispatch({
      type: 'ADD_NEW_LABEL',
      payload: updatedMessages
   })
}

export const removeLabel = (labelToRemove, messages) => dispatch => {
  const toRemoveLabel = messages.filter(m => m.selected).map(x => x.id)
  const updatedMessages = messages.filter(m => {
    if (toRemoveLabel.includes(m.id)){
      m.labels = m.labels.filter(l => l !== labelToRemove)
    }
    return m
  })
   return dispatch({
    type: 'REMOVE_LABEL',
    payload: updatedMessages
   })
}
