export const SAVE_KEY = "SAVE_KEY"
export const LOGOUT = "LOGOUT"

export const saveKey = key => ({
  type: SAVE_KEY,
  key
})

export const logout = () => ({
  type: LOGOUT
})
