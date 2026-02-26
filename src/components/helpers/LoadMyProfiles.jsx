import { useDispatch } from "react-redux"
import { useEffect } from "react"

import { loadMyProfilesGlobally } from "../../redux/actions/index"

const LoadMyProfiles = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadMyProfilesGlobally())
  }, [])

  return <></>
}

export default LoadMyProfiles
