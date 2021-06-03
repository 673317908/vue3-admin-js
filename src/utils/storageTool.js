export function SET_STORAGE(key, value) {
  return localStorage.setItem(key, value)
}

export function GET_STORAGE(key) {
  return localStorage.getItem(key)
}
