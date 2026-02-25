import { useEffect, useState } from "react"

import CommentAPI from "../../../assets/js/comment-api/CommentAPI"

const AddComment = () => {
  const [comment, setComment] = useState(null)

  const newCommentFields = {
    comment: `my comment at ${new Date()}`,
    postId: "699efe332c4b8b00151ab725",
  }

  useEffect(() => {
    const commentAPI = new CommentAPI()
    commentAPI
      .addComment(newCommentFields)
      .then((comment) => {
        console.log(comment)
        setComment(comment)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return (
    <>
      <h1>ADD COMMENT</h1>
      {comment && (
        <div>
          <p>
            "{comment.comment}" di {comment.author} - ID: {comment._id}
          </p>
          <p></p>
        </div>
      )}
      {!comment && <p>Loading...</p>}
    </>
  )
}

export default AddComment
