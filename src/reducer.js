import { SET_CURRENT, BACK } from './constants'

const initialState = {
  current: ''
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      }
    case BACK:
      return {
        ...state,
        current: action.payload
      }
    default:
      return state
  }
}

export default reducer