export default function user(state={}, action) {
  switch (action.type) {
    case 'USER_SIGN_UP':
      return action.form
    case 'USER_LOG_OUT':
      return {}
    case 'USER_SIGN_IN':
      return action.form
    default:
      return state
  }
}

// selector functions
export function isLoggedIn(state) {
  return !!state.email
}

export function name(state) {
  return state.firstname || state.firstName
}

export function userId(state) {
  return state.userId
}
