import ProfileAPI from "../../assets/js/profile-api/ProfileAPI"

const DEFAULT_API_USER = "giuseppe"

//***** ACTIONS: CONSTANTS
export const SET_MY_PROFILE_DATA = "SET_MY_PROFILE_DATA"
export const SET_MY_PROFILE_IS_LOADING = "SET_MY_PROFILE_IS_LOADING"
export const SET_MY_PROFILE_IS_ERROR = "SET_MY_PROFILE_IS_ERROR"

//***** ACTIONS: FUNCTIONS

export const getAndSetMyDefaultProfileGlobally = (apiUser = DEFAULT_API_USER) => {
  return async (dispatch, getState) => {
    const profileAPI = new ProfileAPI({
      apiUser,
    })
    try {
      dispatch(setMyProfileIsLoadingGlobally(true))
      dispatch(setMyProfileIsErrorGlobally(false))
      const myProfile = await profileAPI.getMyProfile()
      dispatch({
        type: SET_MY_PROFILE_DATA,
        payload: myProfile,
      })
      dispatch(setMyProfileIsLoadingGlobally(false))
      dispatch(setMyProfileIsErrorGlobally(false))
    } catch (err) {
      console.error(err)
      dispatch(setMyProfileIsLoadingGlobally(false))
      dispatch(setMyProfileIsErrorGlobally(true))
    }
  }
}

export const setMyProfileIsLoadingGlobally = (isLoading) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_MY_PROFILE_IS_LOADING,
      payload: isLoading,
    })
  }
}

export const setMyProfileIsErrorGlobally = (isError) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_MY_PROFILE_IS_ERROR,
      payload: isError,
    })
  }
}

// export const updateMyProfileAction = (newProfile, apiUser = DEFAULT_API_USER) => {
//   return async (dispatch, getState) => {
//     const profileAPI = new ProfileAPI({
//       apiUser,
//     })
//     const myProfile = await profileAPI.updateMyProfile(newProfile)
//     dispatch({
//       type: SET_MY_PROFILE,
//       payload: myProfile,
//     })
//   }
// }
