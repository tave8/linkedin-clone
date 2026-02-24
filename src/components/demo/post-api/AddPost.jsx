import { useEffect, useState } from "react"

import PostAPI from "../../../assets/js/post-api/PostAPI"

const UpdateMyProfile = () => {
  const [post, setPost] = useState(null)

  const newPostFields = {
    text: "CIAO GIORGIA",
  }

  useEffect(() => {
    const postAPI = new PostAPI()
    postAPI
      .addPost(newPostFields)
      .then((post) => {
        console.log(post)
        setPost(post)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return (
    <>
      <h1>ADD POST</h1>
      {post && (
        <div>
          <p>
            "{post.text}" di {post.username} - ID: {post._id}
          </p>
          <p></p>
        </div>
      )}
      {!post && <p>Loading...</p>}
    </>
  )
}

export default UpdateMyProfile
