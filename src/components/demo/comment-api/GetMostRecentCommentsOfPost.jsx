import { useEffect, useState } from "react"

import CommentAPI from "../../../assets/js/comment-api/CommentAPI"

const GetMostRecentCommentsOfPost = () => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    const commentAPI = new CommentAPI()
    const postId = "699efe332c4b8b00151ab725"

    commentAPI
      .getMostRecentCommentsOfPost(postId)
      .then((remoteComments) => {
        // your code
        console.log(remoteComments)
        setComments(remoteComments)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return (
    <>
      <h1>GET MOST RECENT COMMENTS OF POST</h1>
      {comments.length > 0 && (
        <>
          {comments.map((comment, i) => {
            return (
              <div key={i}>
                <p>
                  {comment.comment} - COMMENT ID - {comment._id} - AUTHOR: {comment.author}
                </p>
              </div>
            )
          })}
        </>
      )}
      {comments.length == 0 && <p>Loading...</p>}
    </>
  )
}

export default GetMostRecentCommentsOfPost
