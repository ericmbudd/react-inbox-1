export const addLabel = (newLabel) => dispatch => dispatch({ type: 'ADD_NEW_LABEL', newLabel })

export const removeLabel = (labelToRemove) => dispatch => dispatch({ type: 'REMOVE_LABEL', labelToRemove })
