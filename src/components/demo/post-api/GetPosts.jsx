import { useEffect, useState } from "react"

import PostAPI from "../../../assets/js/post-api/PostAPI"

const GetPosts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const postAPI = new PostAPI()
    console.log(postAPI)
    postAPI
      .getPosts()
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
      <h1>GET POSTS</h1>
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

export default GetPosts
