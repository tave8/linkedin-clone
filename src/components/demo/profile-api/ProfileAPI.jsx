import GetMyProfile from "./GetMyProfile"
import GetOneProfile from "./GetOneProfile"
import GetProfiles from "./GetProfiles"
import UpdateMyProfile from "./UpdateMyProfile"

const ProfileAPIDemo = () => {
  return (
    <>
      {/* comment/uncomment the components you're interested in */}
      <GetMyProfile />
      <GetOneProfile />
      <UpdateMyProfile />
      <GetProfiles />
    </>
  )
}

export default ProfileAPIDemo
