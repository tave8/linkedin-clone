import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

import { updateMyProfileAction } from "../../../redux/actions"

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
    dispatch(updateMyProfileAction(newProfile))
  }, [])

  return (
    <>
      <h1>UPDATE MY PROFILE</h1>
      {myProfile && (
        <div>
          <p>{myProfile.username}</p>
          <p>{myProfile._id}</p>
        </div>
      )}
      {!myProfile && <p>Loading...</p>}
    </>
  )
}

export default UpdateMyProfile
