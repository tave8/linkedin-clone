import { runLinkedinAPIExampleGetProfiles, runLinkedinAPIExampleGetMyProfile } from "../js/linkedin-api/examples"

/**
 * This component only serves to demo the Linkedin API.
 */
const LinkedinAPIDemo = (props) => {
  runLinkedinAPIExampleGetProfiles()
  runLinkedinAPIExampleGetMyProfile()
  return <></>
}

export default LinkedinAPIDemo
