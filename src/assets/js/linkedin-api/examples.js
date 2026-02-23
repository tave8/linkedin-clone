import LinkedinAPI from "./LinkedinAPI"

export const runLinkedinAPIExampleGetProfiles = () => {
  const linkedinAPI = new LinkedinAPI()
  linkedinAPI.getProfilesRemote()
}

export const runLinkedinAPIExampleGetMyProfile = () => {
  const linkedinAPI = new LinkedinAPI()
  linkedinAPI.getMyProfileRemote()
}
