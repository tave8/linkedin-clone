import LinkedinAPI from "../../assets/js/linkedin-api/LinkedinAPI"

const DEFAULT_API_USER = "giuseppe"

//***** ACTIONS: CONSTANTS
export const SET_MY_PROFILE = "SET_MY_PROFILE"

//***** ACTIONS: FUNCTIONS

export const getMyProfileRemoteAction = (apiUser = DEFAULT_API_USER) => {
  return async (dispatch, getState) => {
    const linkedinAPI = new LinkedinAPI({
      apiUser,
    })
    const myProfile = await linkedinAPI.getMyProfileRemote()
    dispatch({
      type: SET_MY_PROFILE,
      payload: myProfile,
    })
  }
}

export const updateMyProfileRemoteAction = (newProfile, apiUser = DEFAULT_API_USER) => {
  return async (dispatch, getState) => {
    const linkedinAPI = new LinkedinAPI({
      apiUser,
    })
    const myProfile = await linkedinAPI.updateMyProfileRemote(newProfile)
    dispatch({
      type: SET_MY_PROFILE,
      payload: myProfile,
    })
  }
}
