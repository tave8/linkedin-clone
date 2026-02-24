import { useDispatch, useSelector } from "react-redux"
import { Button } from "react-bootstrap"

import { setMyProfileApiUserAndLoadProfileGlobally } from "../../../redux/actions/index"

const ChangeProfile = () => {
  const dispatch = useDispatch()
  const myProfile = useSelector((state) => state.myProfile)

  return (
    <>
      {/* CHANGE PROFILES */}
      <div>
        <Button
          onClick={() => {
            dispatch(setMyProfileApiUserAndLoadProfileGlobally("giuseppe"))
          }}
        >
          change profile: giuseppe
        </Button>
        <Button
          onClick={() => {
            dispatch(setMyProfileApiUserAndLoadProfileGlobally("giorgia"))
          }}
        >
          change profile: giorgia
        </Button>
        <Button
          onClick={() => {
            dispatch(setMyProfileApiUserAndLoadProfileGlobally("raffaele"))
          }}
        >
          change profile: raffaele
        </Button>
      </div>
      {/* SHOW CURRENT PROFILE */}
      {/* my profile data */}
      {!myProfile.isLoading && !myProfile.isError && (
        <div className="d-flex flex-column p-4">
          <img src={myProfile.data.image} className="mb-3 rounded-circle" width={80} />
          <h4>
            {myProfile.data.name} {myProfile.data.surname}
          </h4>
          <h6>{myProfile.data.title}</h6>
          <p className="text-secondary">{myProfile.data.area}</p>
        </div>
      )}

      {/* loading */}
      {myProfile.isLoading && (
        <div>
          <p>loading..</p>
        </div>
      )}

      {/* error */}
      {myProfile.isError && (
        <div>
          <p>error while loading your profile</p>
        </div>
      )}
    </>
  )
}

export default ChangeProfile
