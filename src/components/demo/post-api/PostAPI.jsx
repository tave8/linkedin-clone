import AddPost from "./AddPost"
import DeletePostById from "./DeletePostById"
import GetPosts from "./GetPosts"
import GetMostRecentPosts from "./GetMostRecentPosts"
import GetPostById from "./GetPostById"
import UpdatePostById from "./UpdatePostById"

const PostAPIDemo = () => {
  return (
    <>
      {/* comment/uncomment the components you're interested in */}
      {/* <AddPost /> */}
      {/* <DeletePostById /> */}
      {/* <GetPosts /> */}
      {<GetMostRecentPosts />}
      {/* <GetPostById /> */}
      {/*<UpdatePostById /> */}
    </>
  )
}

export default PostAPIDemo
