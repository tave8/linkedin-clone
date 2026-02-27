import { combineReducers, configureStore } from "@reduxjs/toolkit"
import myProfileReducer from "../reducers/myProfileReducer"
import myProfilesReducer from "../reducers/myProfilesReducer"
import messagesTabReducer from "../reducers/messagesTabReducer"

const bigReducer = combineReducers({
  myProfile: myProfileReducer,
  myProfiles: myProfilesReducer,
  messagesTab: messagesTabReducer,
})

const store = configureStore({
  reducer: bigReducer,
})

export { store }
