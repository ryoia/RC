export default function item(state={}, action) {
  switch (action.type) {
    case 'ADD_ITEM': 
      return action.form
    case 'UPLOADED_IMAGE':
      return action.form
    case 'ITEM_LIST':
      return action.form
    default:
      return state
  }
}

export function itemList(state) {
  return state.item
}
