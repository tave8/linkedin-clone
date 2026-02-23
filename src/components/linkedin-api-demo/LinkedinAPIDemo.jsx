// linkedin api demo components
import LinkedinAPIDemoGetMyProfile from "./GetMyProfile"
import LinkedinAPIDemoGetOneProfile from "./GetOneProfile"
import LinkedinAPIDemoGetProfiles from "./GetProfiles"
import LinkedinAPIDemoUpdateMyProfile from "./UpdateMyProfile"

const LinkedinAPIDemo = () => {
  return (
    <>
      {/* comment/uncomment the components you're interested in */}
      <LinkedinAPIDemoGetMyProfile />
      <LinkedinAPIDemoGetOneProfile />
      <LinkedinAPIDemoUpdateMyProfile />
      <LinkedinAPIDemoGetProfiles />
    </>
  )
}

export default LinkedinAPIDemo
