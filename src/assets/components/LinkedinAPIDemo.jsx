import { runLinkedinAPIExampleGetProfiles, runLinkedinAPIExampleGetMyProfile, runLinkedinAPIExampleGetOneProfile } from "../js/linkedin-api/examples"

/**
 * This component only serves to demo the Linkedin API.
 */
const LinkedinAPIDemo = (props) => {
  runLinkedinAPIExampleGetProfiles()
  runLinkedinAPIExampleGetMyProfile()
  runLinkedinAPIExampleGetOneProfile()
  return <></>
}

export default LinkedinAPIDemo
