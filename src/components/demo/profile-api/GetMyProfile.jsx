import { useEffect, useState } from "react"
import ProfileAPI from "../../../assets/js/profile-api/ProfileAPI"

const GetMyProfile = () => {
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    const profileAPI = new ProfileAPI()
    const profileId = "699c4e200bc1de001577b7b6"

    profileAPI
      .getProfileById(profileId)
      .then((remoteProfile) => {
        setProfile(remoteProfile)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return (
    <>
      <h1>GET MY PROFILE</h1>
      {profile && (
        <>
          <p>{profile.username}</p>
          <p>{profile._id}</p>
        </>
      )}
      {!profile && <p>Loading...</p>}
    </>
  )
}

export default GetMyProfile
