import { combineReducers, configureStore } from "@reduxjs/toolkit"
import myProfileReducer from "../reducers/myProfileReducer"
import myProfilesReducer from "../reducers/myProfilesReducer"

const bigReducer = combineReducers({
  myProfile: myProfileReducer,
  myProfiles: myProfilesReducer,
})

const store = configureStore({
  reducer: bigReducer,
})

export { store }
