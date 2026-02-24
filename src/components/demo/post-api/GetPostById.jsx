import { useState, useEffect } from "react"
import PostAPI from "../../../assets/js/post-api/PostAPI"

const GetPostById = () => {
  const [post, setPost] = useState(null)

  const postId = "699d9dc1b5582000158c3434"
  const fakePostId = "xyz"
  const targetId = fakePostId

  useEffect(() => {
    const postAPI = new PostAPI()
    postAPI
      .getPostById(targetId)
      .then((post) => {
        setPost(post)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return (
    <>
      <h1>GET POST BY ID</h1>
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

export default GetPostById
