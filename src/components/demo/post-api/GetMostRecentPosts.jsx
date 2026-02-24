import ProfileAPI from "../../../assets/js/profile-api/ProfileAPI"
import { useState, useEffect } from "react"

const GetMostRecentProfiles = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const profileAPI = new ProfileAPI()
    profileAPI
      .getMostRecentProfiles()
      .then((remoteProfiles) => {
        setProfiles(remoteProfiles)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return (
    <>
      <h1>GET MOST RECENT PROFILES</h1>
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

export default GetMostRecentProfiles
