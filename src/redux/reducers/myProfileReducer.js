// import { SET_TRACKS_SEARCH_QUERY, SET_TRACKS_SEARCH_LIST, SET_TRACKS_SEARCH_IS_ERROR, SET_TRACKS_SEARCH_IS_LOADING } from "../actions"

import { SET_MY_PROFILE } from "../actions"

const initialState = {}

const mainReducer = (currState = initialState, action) => {
  switch (action.type) {
    case SET_MY_PROFILE:
      return {
        ...currState,
        ...action.payload,
      }
    default:
      return currState
  }
}

export default mainReducer
