export function signup (form) {
  return { form, type: 'USER_SIGN_UP' }
}

export function additem (form) {
  return { form, type: 'ADD_ITEM' }
}

export const logout = () => ({
  type: 'USER_LOG_OUT'
})

export function signin (form) {
  return { form, type: 'USER_SIGN_IN' }
}

export function uploadedimage (form) {
  return { form, type: 'UPLOADED_IMAGE' }
}

export function itemlist (form) {
  return { form, type: 'ITEM_LIST' }
}
