import { useState, useEffect } from "react"
import CommentAPI from "../../../assets/js/comment-api/CommentAPI"

const UpdateCommentById = () => {
  const [comment, setComment] = useState(null)

  const commentId = "699efda52c4b8b00151ab71f"

  const newComment = {
    comment: "HEY THIS IS NEW COMMENT!",
  }

  useEffect(() => {
    const commentAPI = new CommentAPI()
    commentAPI
      .updateCommentById(commentId, newComment)
      .then((remoteComment) => {
        console.log(remoteComment)
        setComment(remoteComment)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return (
    <>
      <h1>UPDATE COMMENT</h1>
      {comment && (
        <div>
          <p>
            {comment.comment} - COMMENT ID: {comment._id} ({comment.author})
          </p>
        </div>
      )}
      {!comment && <p>Loading...</p>}
    </>
  )
}

export default UpdateCommentById
