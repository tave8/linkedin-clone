import { useDispatch } from "react-redux"
import { useEffect } from "react"

import { getAndSetMyDefaultProfileGlobally } from "../../redux/actions/index"

/**
 * This component only serves to get the
 * default profile from API and then
 * set it as the my default profile in redux store,
 * so my profile is globally available in
 * other components.
 *
 * Thefore it is assumed that the order in which
 * this component mounts matters, so it is assumed
 * that this component will have to be placed as the
 * first, or among the first, components in App.
 */
const LoadMyDefaultProfile = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAndSetMyDefaultProfileGlobally())
  }, [])

  return <></>
}

export default LoadMyDefaultProfile
