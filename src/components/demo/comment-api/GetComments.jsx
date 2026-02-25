import { useEffect, useState } from "react"

import CommentAPI from "../../../assets/js/comment-api/CommentAPI"

const GetComments = () => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    const commentAPI = new CommentAPI()

    commentAPI
      .getComments()
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
      <h1>GET COMMENTS</h1>
      {comments.length > 0 && (
        <>
          {comments.map((comment, i) => {
            return (
              <div key={i}>
                <p>
                  {comment.comment} - ELEMENT ID: {comment.elementId}
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

export default GetComments
