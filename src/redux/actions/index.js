import LinkedinAPI from "../../assets/js/linkedin-api/LinkedinAPI"

const DEFAULT_API_USER = "giuseppe"

//***** ACTIONS: CONSTANTS

//***** ACTIONS: FUNCTIONS

export const getMyProfileRemoteAction = (apiUser = DEFAULT_API_USER) => {
  return async (dispatch, getState) => {
    const linkedinAPI = new LinkedinAPI({
      apiUser,
    })
    const myProfile = await linkedinAPI.getMyProfileRemote()
    console.log(myProfile)
    // dispatch({
    //   type: SET_TRACKS_SEARCH_LIST,
    //   payload: tracksList,
    // })
  }
}
