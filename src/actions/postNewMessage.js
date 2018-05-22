export const postNewItem = (id, object) => dispatch => (
    dispatch({
      type: 'POST_NEW_ITEM',
      id,
      object
    })
  )
