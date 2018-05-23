export const applyLabel = (state, action) => {
    const toApplyLabel = state.allMessages.filter(m => m.selected).map(x => x.id)
    switch(action.type){
      case 'ADD_NEW_LABEL':
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
      default:
        return state
    }
}

export const removeLabel = (state, action) => {
  const toRemoveLabel = state.allMessages.filter(m => m.selected).map(x => x.id)
  switch(action.type){
    case 'REMOVE_LABEL':
      return {
        ...state,
        allMessages: state.allMessages.filter(m => {
          if (toRemoveLabel.includes(m.id)){
            m.labels = m.labels.filter(l => l !== action.labelToRemove)
          }
          return m
        })
      }
    default:
      return state
  }
}
