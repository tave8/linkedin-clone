import ProfileAPI from "../../../assets/js/profile-api/ProfileAPI"
import { useState, useEffect } from "react"

const GetAPIUsers = () => {
  const [APIUsers, setAPIUsers] = useState([])

  useEffect(() => {
    const profileAPI = new ProfileAPI()
    profileAPI
      .getAPIUsers()
      .then((APIUsers) => {
        console.log(APIUsers)
        setAPIUsers(APIUsers)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return (
    <>
      <h1>GET API USERS</h1>
      {APIUsers.length > 0 && (
        <>
          {APIUsers.map((APIUser, i) => {
            return (
              <div key={i}>
                <p>{APIUser.name}</p>
              </div>
            )
          })}
        </>
      )}
      {APIUsers.length == 0 && <p>Loading...</p>}
    </>
  )
}

export default GetAPIUsers
