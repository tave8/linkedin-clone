import { useEffect, useState } from "react"

import CommentAPI from "../../../assets/js/comment-api/CommentAPI"

const GetMostRecentCommentsOfPost = () => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    const commentAPI = new CommentAPI()
    const postId = "699d8e46b5582000158c3420"

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
                  {comment.comment} - AUTHOR: {comment.author} - ELEMENT ID: {comment.elementId}
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
