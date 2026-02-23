import ProfileAPI from "../../../assets/js/profile-api/ProfileAPI"
import { useState, useEffect } from "react"

const GetOneProfile = () => {
  const [oneProfile, setOneProfile] = useState(null)
  const profileId = "699c4e200bc1de001577b7b6"

  useEffect(() => {
    const profileAPI = new ProfileAPI()
    profileAPI
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

export default GetOneProfile
