const localstorage = global.window.localStorage

console.log({localstorage})

export function get(key) {
  return localstorage.getItem(key)
}

export function set(key, value) {
  localstorage.setItem(key, value)
}
