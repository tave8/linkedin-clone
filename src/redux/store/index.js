import { combineReducers, configureStore } from "@reduxjs/toolkit"
import myProfileReducer from "../reducers/myProfileReducer"

const bigReducer = combineReducers({
  myProfile: myProfileReducer,
})

const store = configureStore({
  reducer: bigReducer,
})


export { store }
