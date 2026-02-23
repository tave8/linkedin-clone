import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

import { runLinkedinAPIExampleGetProfiles, runLinkedinAPIExampleGetMyProfile, runLinkedinAPIExampleGetOneProfile } from "../assets/js/linkedin-api/examples"
import { getMyProfileRemoteAction } from "../redux/actions"

/**
 * This component only serves to demo the Linkedin API.
 */
const LinkedinAPIDemo = (props) => {
  const myProfile = useSelector((state) => state.myProfile)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMyProfileRemoteAction())
  }, [])

  return (
    <>
      {myProfile.data && (
        <>
          <p>{myProfile.data.username}</p>
          <p>{myProfile.data._id}</p>
        </>
      )}
      {!myProfile.data && <p>Loading...</p>}
    </>
  )
}

export default LinkedinAPIDemo
