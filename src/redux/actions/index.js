import ProfileAPI from "../../assets/js/profile-api/ProfileAPI"

//***** ACTIONS: CONSTANTS
export const SET_MY_PROFILE_API_USER = "SET_MY_PROFILE_API_USER"
export const SET_MY_PROFILE_DATA = "SET_MY_PROFILE_DATA"
export const SET_MY_PROFILE_IS_LOADING = "SET_MY_PROFILE_IS_LOADING"
export const SET_MY_PROFILE_IS_ERROR = "SET_MY_PROFILE_IS_ERROR"

//***** ACTIONS: FUNCTIONS

export const setMyProfileApiUserAndLoadProfileGlobally = (apiUser) => {
  return async (dispatch, getState) => {
    dispatch({
      type: SET_MY_PROFILE_API_USER,
      payload: apiUser,
    })
    dispatch(loadMyDefaultProfileGlobally())
  }
}

export const loadMyDefaultProfileGlobally = () => {
  return async (dispatch, getState) => {
    const apiUser = getState().myProfile.apiUser

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
