import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const reducers = {
}
const reducer = combineReducers(reducers)
const store = createStore(reducer)
