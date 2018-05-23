export const postNewMessage = (id, object) => dispatch => (
    dispatch({
      type: 'POST_NEW_MESSAGE',
      id,
      object
    })
  )
