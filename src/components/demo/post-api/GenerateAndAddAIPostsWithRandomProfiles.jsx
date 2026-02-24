import { useEffect, useState } from "react"

import PostAPI from "../../../assets/js/post-api/PostAPI"

const GenerateAndAddAIPosts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const postAPI = new PostAPI()
    const postThemes = ["programming & software", "cooking", "career growth"]
    postAPI
      .generateAndAddAIPostsWithRandomProfiles(postThemes)
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
      <h1>GENERATE & ADD AI POSTS</h1>
      {posts.length > 0 && (
        <>
          {posts.map((post) => {
            return (
              <div key={post._id}>
                <p>
                  {post.text} - ID: {post._id} ({post.username})
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

export default GenerateAndAddAIPosts
