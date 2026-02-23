// import { runLinkedinAPIExampleGetProfiles, runLinkedinAPIExampleGetMyProfile, runLinkedinAPIExampleGetOneProfile } from "../assets/js/linkedin-api/examples"
import LinkedinAPI from "../../assets/js/linkedin-api/LinkedinAPI"
import { useState, useEffect } from "react"

/**
 * This component only serves to demo the Linkedin API.
 */
const LinkedinAPIDemoGetOneProfile = () => {
  const [oneProfile, setOneProfile] = useState(null)
  const profileId = "699c4e200bc1de001577b7b6"

  useEffect(() => {
    const linkedinAPI = new LinkedinAPI()
    linkedinAPI
      .getOneProfileRemote(profileId)
      .then((remoteProfile) => {
        setOneProfile(remoteProfile)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return (
    <>
      <h1>GET 1 PROFILE</h1>
      {oneProfile && (
        <div>
          <p>{oneProfile.username}</p>
          <p>{oneProfile._id}</p>
        </div>
      )}
      {!oneProfile && <p>Loading...</p>}
    </>
  )
}

export default LinkedinAPIDemoGetOneProfile
