import { SET_MY_PROFILE_DATA, SET_MY_PROFILE_IS_LOADING, SET_MY_PROFILE_IS_ERROR } from "../actions"

const initialState = {
  // the actual my profile fields
  data: {},
  isLoading: false,
  isError: false,
}

const mainReducer = (currState = initialState, action) => {
  switch (action.type) {
    case SET_MY_PROFILE_DATA:
      return {
        ...currState,
        data: action.payload,
      }
    case SET_MY_PROFILE_IS_LOADING:
      return {
        ...currState,
        isLoading: action.payload,
      }
    case SET_MY_PROFILE_IS_ERROR:
      return {
        ...currState,
        isError: action.payload,
      }
    default:
      return currState
  }
}

export default mainReducer
