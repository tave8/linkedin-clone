import { useEffect, useState } from "react"

import PostAPI from "../../../assets/js/post-api/PostAPI"

const GetMostRecentPosts = () => {
  const [posts, setPosts] = useState([])

  // const postId = "69a077d82a4669001512aaad"

  useEffect(() => {
    const postAPI = new PostAPI()
    // postAPI
    //   .prettifyPostWithProfileImg(postId)
    //   .then((post) => {
    //     console.log(post)
    //   })
    //   .catch((err) => {
    //     console.error(err)
    //   })

    
    postAPI
      .getMostRecentPosts()
      .then((posts) => {
        console.log(posts)
        setPosts(posts)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return (
    <>
      <h1>GET MOST RECENT POSTS</h1>
      {posts.length > 0 && (
        <>
          {posts.map((post) => {
            return (
              <div key={post._id}>
                <p>
                  {post.text} - POST ID: {post._id} ({post.username})
                </p>
              </div>
            )
          })}
        </>
      )}
      {posts.length == 0 && <p>Loading...</p>}
    </>
  )
}

export default GetMostRecentPosts
