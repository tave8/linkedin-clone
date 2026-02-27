import { useState, useEffect } from "react"
import ProfileAPI from "../../../assets/js/profile-api/ProfileAPI"

const GetProfileById = () => {
  const [oneProfile, setOneProfile] = useState(null)
  const profileId = "699ef7752c4b8b00151ab715"

  useEffect(() => {
    const profileAPI = new ProfileAPI()
    profileAPI
      .getProfileById(profileId)
      .then((remoteProfile) => {
        setOneProfile(remoteProfile)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return (
    <>
      <h1>GET PROFILE BY ID</h1>
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

export default GetProfileById
