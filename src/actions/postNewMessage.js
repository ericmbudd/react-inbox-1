export const postNewItem = (id, object) => dispatch => (
    dispatch({
      type: 'POST_NEW_MESSAGE',
      id,
      object
    })
  )
