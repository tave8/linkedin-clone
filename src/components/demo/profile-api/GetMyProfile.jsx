import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

import { getMyProfileAction } from "../../../redux/actions"

const GetMyProfile = () => {
  const myProfile = useSelector((state) => state.myProfile)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMyProfileAction())
  }, [])

  return (
    <>
      <h1>GET MY PROFILE</h1>
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

export default GetMyProfile
