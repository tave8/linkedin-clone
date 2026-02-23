import LinkedinAPI from "../../assets/js/linkedin-api/LinkedinAPI"
import { useState, useEffect } from "react"

/**
 * This component only serves to demo the Linkedin API.
 */
const LinkedinAPIDemoGetProfiles = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const linkedinAPI = new LinkedinAPI()
    linkedinAPI
      .getProfilesRemote()
      .then((remoteProfiles) => {
        setProfiles(remoteProfiles)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return (
    <>
      <h1>GET PROFILES</h1>
      {profiles.length > 0 && (
        <>
          {profiles.map((profile) => {
            return (
              <div key={profile._id}>
                <p>{profile.username}</p>
              </div>
            )
          })}
        </>
      )}
      {profiles.length == 0 && <p>Loading...</p>}
    </>
  )
}

export default LinkedinAPIDemoGetProfiles
