import ProfileAPI from "../../assets/js/profile-api/ProfileAPI"

//***** ACTIONS: CONSTANTS

// ****** MY PROFILE
export const SET_MY_PROFILE_API_USER = "SET_MY_PROFILE_API_USER"
export const SET_MY_PROFILE_DATA = "SET_MY_PROFILE_DATA"
export const SET_MY_PROFILE_IS_LOADING = "SET_MY_PROFILE_IS_LOADING"
export const SET_MY_PROFILE_IS_ERROR = "SET_MY_PROFILE_IS_ERROR"

// *******  MY PROFILES
export const SET_MY_PROFILES_LIST = "SET_MY_PROFILES_LIST"
export const SET_MY_PROFILES_IS_LOADING = "SET_MY_PROFILES_IS_LOADING"
export const SET_MY_PROFILES_IS_ERROR = "SET_MY_PROFILES_IS_ERROR"

// *******  MY MESSAGES
export const SET_MESSAGES_TAB_IS_OPEN = "SET_MESSAGES_TAB_IS_OPEN"
export const SET_MESSAGES_TAB_IS_OPEN_TOGGLE = "SET_MESSAGES_TAB_IS_OPEN_TOGGLE"


//***** ACTIONS: FUNCTIONS

// ***** MY PROFILE

export const setMyProfileApiUserAndLoadProfileGlobally = (apiUser) => {
  return async (dispatch, getState) => {
    dispatch({
      type: SET_MY_PROFILE_API_USER,
      payload: apiUser,
    })
    dispatch(loadMyDefaultProfileGlobally())
  }
}

export const setMyProfileDataGlobally = (newProfileData) => {
  return async (dispatch, getState) => {
    dispatch({
      type: SET_MY_PROFILE_DATA,
      payload: newProfileData,
    })
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
      dispatch(setMyProfileIsLoadingGlobally(false))
      dispatch(setMyProfileIsErrorGlobally(false))
      dispatch(setMyProfileDataGlobally(myProfile))
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

// MY PROFILES

export const loadMyProfilesGlobally = () => {
  return async (dispatch, getState) => {
    const profileAPI = new ProfileAPI()

    try {
      dispatch(setMyProfilesIsLoadingGlobally(true))
      dispatch(setMyProfilesIsErrorGlobally(false))
      const myProfile = await profileAPI.getMyProfiles()
      dispatch(setMyProfilesIsLoadingGlobally(false))
      dispatch(setMyProfilesIsErrorGlobally(false))
      dispatch(setMyProfilesListGlobally(myProfile))
    } catch (err) {
      console.error(err)
      dispatch(setMyProfilesIsLoadingGlobally(false))
      dispatch(setMyProfilesIsErrorGlobally(true))
    }
  }
}

export const setMyProfilesListGlobally = (myProfiles) => {
  return async (dispatch, getState) => {
    dispatch({
      type: SET_MY_PROFILES_LIST,
      payload: myProfiles,
    })
  }
}

export const setMyProfilesIsLoadingGlobally = (isLoading) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_MY_PROFILES_IS_LOADING,
      payload: isLoading,
    })
  }
}

export const setMyProfilesIsErrorGlobally = (isError) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_MY_PROFILES_IS_ERROR,
      payload: isError,
    })
  }
}


// MESSAGES TAB

export const setMessagesTabIsOpenGlobally = (isOpen) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_MESSAGES_TAB_IS_OPEN,
      payload: isOpen,
    })
  }
}


export const setMessagesTabIsOpenToggleGlobally = (isOpen) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_MESSAGES_TAB_IS_OPEN_TOGGLE,
      payload: isOpen,
    })
  }
}
