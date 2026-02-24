import { useEffect, useState } from "react"

import PostAPI from "../../../assets/js/post-api/PostAPI"

const DeletePostById = () => {
  const [doneDeleteOperation, setDoneDeleteOperation] = useState(false)
  const [hasDeletedPost, setHasDeletedPost] = useState(false)

  const postId = "699d9dc1b5582000158c3434"
  const fakePostId = "xyz"
  // edit targetId
  const targetId = postId

  useEffect(() => {
    const postAPI = new PostAPI()
    postAPI
      .deletePostById(targetId)
      .then((post) => {
        console.log(post)
        // setPost(post)
        setDoneDeleteOperation(true)
        setHasDeletedPost(true)
      })
      .catch((err) => {
        setDoneDeleteOperation(true)
        setHasDeletedPost(false)
        console.error(err)
      })
  }, [])

  return (
    <>
      <h1>DELETE POST BY ID</h1>
      {hasDeletedPost && <p>deleted post with ID {targetId}</p>}
      {!doneDeleteOperation && <p>Loading...</p>}
      {doneDeleteOperation && !hasDeletedPost && <p>error while deleting post</p>}
    </>
  )
}

export default DeletePostById
