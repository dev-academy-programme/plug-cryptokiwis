const localstorage = global.window.localStorage

export function get(key) {
  return localstorage.getItem(key)
}

export function set(key, value) {
  localstorage.setItem(key, value)
}

export function remove(key) {
  localstorage.removeItem(key)
}
