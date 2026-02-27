import { SET_MESSAGES_TAB_IS_OPEN, SET_MESSAGES_TAB_IS_OPEN_TOGGLE } from "../actions"

const initialState = {
  isOpen: false,
}

const mainReducer = (currState = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGES_TAB_IS_OPEN:
      return {
        ...currState,
        isOpen: action.payload,
      }
    case SET_MESSAGES_TAB_IS_OPEN_TOGGLE:
      return {
        ...currState,
        isOpen: !currState.isOpen,
      }
    default:
      return currState
  }
}

export default mainReducer
