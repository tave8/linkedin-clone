import ProfileAPI from "../../assets/js/profile-api/ProfileAPI"

const DEFAULT_API_USER = "giuseppe"

//***** ACTIONS: CONSTANTS
export const SET_MY_PROFILE = "SET_MY_PROFILE"

//***** ACTIONS: FUNCTIONS

export const getMyProfileAction = (apiUser = DEFAULT_API_USER) => {
  return async (dispatch, getState) => {
    const profileAPI = new ProfileAPI({
      apiUser,
    })
    const myProfile = await profileAPI.getMyProfile()
    dispatch({
      type: SET_MY_PROFILE,
      payload: myProfile,
    })
  }
}

export const updateMyProfileAction = (newProfile, apiUser = DEFAULT_API_USER) => {
  return async (dispatch, getState) => {
    const profileAPI = new ProfileAPI({
      apiUser,
    })
    const myProfile = await profileAPI.updateMyProfile(newProfile)
    dispatch({
      type: SET_MY_PROFILE,
      payload: myProfile,
    })
  }
}
