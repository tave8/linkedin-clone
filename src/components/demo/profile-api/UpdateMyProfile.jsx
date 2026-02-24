import { useEffect, useState } from "react"
import ProfileAPI from "../../../assets/js/profile-api/ProfileAPI"

/**
 * PROFILE model
  {
    "name": "Mario",
    "surname": "Rossi",
    "email": "mario@rossi.it",
    "username": "mario88",
    "bio": "Freelance developer",
    "title": "Full Stack Web Developer",
    "area": "Milan",
    "image": ..., // SERVER GENERATED, modificabile
    "createdAt": "2019-09-20T08:53:07.094Z", // SERVER GENERATED
    "updatedAt": "2019-09-20T09:00:46.977Z", // SERVER GENERATED
    "__v": 0, // SERVER GENERATED
    "_id": "5d84937322b7b54d848eb41b", // SERVER GENERATED
  }
 */
const UpdateMyProfile = () => {
  const [profile, setProfile] = useState(null)

  const newProfile = {
    image: "https://i.postimg.cc/8kn0m39H/photo-giuseppe-white-bg-trim.png",
    title: "Backend Software Developer",
    area: "Karlsruhe, Germany",
    username: "tave8",
    name: "Giuseppe",
    surname: "Tavella",
    email: "giuseppetavella8@gmail.com"
  }


  useEffect(() => {
    const profileAPI = new ProfileAPI()
    profileAPI
      .updateMyProfile(newProfile)
      .then((post) => {
        setProfile(post)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return (
    <>
      <h1>UPDATE MY PROFILE</h1>
      {profile && (
        <div>
          <p>{profile.username}</p>
          <p>{profile._id}</p>
        </div>
      )}
      {!profile && <p>Loading...</p>}
    </>
  )
}

export default UpdateMyProfile
