import GetComments from "./GetComments"
import GetMostRecentCommentsOfPost from "./GetMostRecentCommentsOfPost"
import AddComment from "./AddComment"
import DeleteCommentById from "./DeleteCommentById"
import UpdateCommentById from "./UpdateCommentById"

const CommentAPIDemo = () => {
  return (
    <>
      {/* comment/uncomment the components you're interested in */}
      <GetComments />
      {/* <GetMostRecentCommentsOfPost /> */}
      {/* <AddComment /> */}
      {/* <DeleteCommentById /> */}
      <UpdateCommentById />
    </>
  )
}

export default CommentAPIDemo
