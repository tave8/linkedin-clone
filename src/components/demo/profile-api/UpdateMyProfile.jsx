import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

import { updateMyProfileRemoteAction } from "../../../redux/actions"

const UpdateMyProfile = () => {
  const myProfile = useSelector((state) => state.myProfile)
  const dispatch = useDispatch()

  const newProfile = {
    // image: "sdasd",
    // area: "world",
    // name: "giuseppere re re ",
    // username: "tave8",
    // email: "sds"
  }

  useEffect(() => {
    dispatch(updateMyProfileRemoteAction(newProfile))
  }, [])

  return (
    <>
      <h1>UPDATE MY PROFILE</h1>
      {myProfile.data && (
        <div>
          <p>{myProfile.data.username}</p>
          <p>{myProfile.data._id}</p>
        </div>
      )}
      {!myProfile.data && <p>Loading...</p>}
    </>
  )
}

export default UpdateMyProfile
