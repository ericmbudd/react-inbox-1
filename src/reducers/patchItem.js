export const patchItem = (state, action) => {
   switch (action.type) {
     case: 'PATCH_ITEM'
       return fetch("http://localhost:8082/api/messages", {
                 body: JSON.stringify(action.objectToPatch),
                 headers: {
                 'content-type': 'application/json'
                 },
                 method: 'PATCH'
             })
             .then(response => response.json())
             .catch(error => error)
     default:
      return state
   }
 }
