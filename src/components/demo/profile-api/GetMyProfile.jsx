import { useEffect, useState } from "react"
import ProfileAPI from "../../../assets/js/profile-api/ProfileAPI"

const GetMyProfile = () => {
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    const profileAPI = new ProfileAPI({
      apiUser: "giorgia"
    })

    profileAPI
      .getMyProfile()
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
