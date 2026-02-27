import { SET_MY_PROFILE_API_USER, SET_MY_PROFILE_DATA, SET_MY_PROFILE_IS_LOADING, SET_MY_PROFILE_IS_ERROR } from "../actions"

const initialState = {
  // the actual my profile fields
  data: {},
  // the API user, so the current "my profile"
  apiUser: "team",
  isLoading: false,
  isError: false,
}

const mainReducer = (currState = initialState, action) => {
  switch (action.type) {
    case SET_MY_PROFILE_API_USER:
      return {
        ...currState,
        apiUser: action.payload,
      }
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
