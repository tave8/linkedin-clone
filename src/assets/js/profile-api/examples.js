import LinkedinAPI from "./LinkedinAPI"

export const runLinkedinAPIExampleGetProfiles = () => {
  const linkedinAPI = new LinkedinAPI()
  linkedinAPI.getProfilesRemote()
}

export const runLinkedinAPIExampleGetMyProfile = () => {
  const linkedinAPI = new LinkedinAPI()
  linkedinAPI.getMyProfileRemote()
}

export const runLinkedinAPIExampleGetOneProfile = (exampleUserId = "653f5b02b397340014d5e7fa") => {
  const linkedinAPI = new LinkedinAPI()
  linkedinAPI.getOneProfileRemote(exampleUserId)
}
