import { useState, useEffect } from "react"
import PostAPI from "../../../assets/js/post-api/PostAPI"

const UpdatePostById = () => {
  const [post, setPost] = useState(null)

  // this post causes server timeout (503 error)
  // const postId = "699d9dc1b5582000158c3433"
  // this post exists, at this moment
  const postId = "699d9dc1b5582000158c3434"
  // const fakePostId = "xyz"
  const targetId = postId

  const newPost = {
    text: "MY NEW POST!!",
  }

  useEffect(() => {
    const postAPI = new PostAPI()
    postAPI
      .updatePostById(targetId, newPost)
      .then((post) => {
        setPost(post)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return (
    <>
      <h1>UPDATE POST</h1>
      {post && (
        <div>
          <p>{post.text}</p>
          <p>{post.username}</p>
        </div>
      )}
      {!post && <p>Loading...</p>}
    </>
  )
}

export default UpdatePostById
