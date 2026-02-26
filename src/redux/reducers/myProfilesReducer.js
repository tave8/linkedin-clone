import { SET_MY_PROFILES_LIST, SET_MY_PROFILES_IS_ERROR, SET_MY_PROFILES_IS_LOADING } from "../actions"

const initialState = {
  // the actual list of my profiles
  list: [],
  isLoading: false,
  isError: false,
}

const mainReducer = (currState = initialState, action) => {
  switch (action.type) {
    case SET_MY_PROFILES_LIST:
      return {
        ...currState,
        list: action.payload,
      }
    case SET_MY_PROFILES_IS_LOADING:
      return {
        ...currState,
        isLoading: action.payload,
      }
    case SET_MY_PROFILES_IS_ERROR:
      return {
        ...currState,
        isError: action.payload,
      }
    default:
      return currState
  }
}

export default mainReducer
