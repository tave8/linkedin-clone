import { useEffect, useState } from "react"

import CommentAPI from "../../../assets/js/comment-api/CommentAPI"

const DeleteCommentById = () => {
  const [doneDeleteOperation, setDoneDeleteOperation] = useState(false)
  const [hasDeletedComment, setHasDeletedComment] = useState(false)

  const commentIds = ["699efe682c4b8b00151ab72a"]
  const commentIdIdx = 0

  useEffect(() => {
    const commentAPI = new CommentAPI()
    commentAPI
      .deleteCommentById(commentIds[commentIdIdx])
      .then((post) => {
        console.log(post)
        setDoneDeleteOperation(true)
        setHasDeletedComment(true)
      })
      .catch((err) => {
        setDoneDeleteOperation(true)
        setHasDeletedComment(false)
        console.error(err)
      })
  }, [])

  return (
    <>
      <h1>DELETE POST BY ID</h1>
      {hasDeletedComment && <p>deleted comment with ID {commentIds[commentIdIdx]}</p>}
      {!doneDeleteOperation && <p>Loading...</p>}
      {doneDeleteOperation && !hasDeletedComment && <p>error while deleting comment</p>}
    </>
  )
}

export default DeleteCommentById
