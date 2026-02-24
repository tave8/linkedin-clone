import GetMyProfile from "./GetMyProfile"
import GetProfileById from "./GetProfileById"
import GetProfiles from "./GetProfiles"
import GetMostRecentProfiles from "./GetMostRecentProfiles"
import UpdateMyProfile from "./UpdateMyProfile"

const ProfileAPIDemo = () => {
  return (
    <>
      {/* comment/uncomment the components you're interested in */}
      <GetMyProfile />
      <GetProfileById />
      <UpdateMyProfile />
      <GetProfiles />
      <GetMostRecentProfiles />
    </>
  )
}

export default ProfileAPIDemo
