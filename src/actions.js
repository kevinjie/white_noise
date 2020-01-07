import { SET_CURRENT, BACK } from './constants'

export const setCurrentSong = (title) => ({
  type: SET_CURRENT,
  payload: title
})

export const backToList = () => ({
  type: BACK,
  payload: ''
})