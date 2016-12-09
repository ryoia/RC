import user, * as fromUser from './user'
import item, * as fromItem from './item'
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  form: formReducer,
  user,
  item
})

export const isLoggedIn = (state) =>
  fromUser.isLoggedIn(state.user)

export const userName = (state) =>
  fromUser.name(state.user)

export const userId = (state) =>
  fromUser.userId(state.user)

export const searchResult = (state) =>
  fromItem.itemList(state)
