export const postNewItem = (id, object) => {
  return {
    type: 'POST_NEW_ITEM',
    id,
    object
  }
}
