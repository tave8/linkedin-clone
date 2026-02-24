import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"

import PostAPI from "../../../assets/js/post-api/PostAPI"

const UpdateMyProfile = () => {
  const [post, setPost] = useState(null)

  const newPostFields = {
    text: "my new post! ",
  }

  useEffect(() => {
    const postAPI = new PostAPI()
    postAPI.addPost(newPostFields)
    then((post) => {
      console.log(post)
    }).catch((err) => {
      console.err(err)
    })
  }, [])

  return (
    <>
      <h1>ADD POST</h1>
      {post && (
        <div>
          <p>{post.data.username}</p>
          <p>{myProfile.data._id}</p>
        </div>
      )}
      {!myProfile.data && <p>Loading...</p>}
    </>
  )
}

export default UpdateMyProfile
