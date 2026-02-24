import { useEffect, useState } from "react"

import PostAPI from "../../../assets/js/post-api/PostAPI"

const GetMostRecentPosts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const postAPI = new PostAPI()
    console.log(postAPI)
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
                <p>{post.text}</p>
                <p>{post.username}</p>
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
