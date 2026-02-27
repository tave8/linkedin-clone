import { useEffect, useState } from "react"

import PostAPI from "../../../assets/js/post-api/PostAPI"

const AddPostWithImage = () => {
  const [post, setPost] = useState(false)

  const newPostFields = {
    text: "GIUSEPPE - ADD POST WITH IMAGE",
  }

  useEffect(() => {}, [])

  const handleAddPostWithImage = (imageFile) => {
    const postAPI = new PostAPI()
    postAPI
      .addPostWithImage(newPostFields, imageFile)
      .then((post) => {
        console.log(post)
        setPost(post)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  return (
    <>
      <h1>ADD POST WITH IMAGE</h1>
      <input
        type="file"
        accept="image/*"
        onChange={(event) => {
          // setImageFile(event.target.files[0])
          handleAddPostWithImage(event.target.files[0])
        }}
      />
      {post && (
        <div>
          <p>
            "{post.text}" di {post.username} - ID: {post._id}
          </p>
          <img src={post.image} />
          <p></p>
        </div>
      )}
      {!post && <p>Loading...</p>}
    </>
  )
}

export default AddPostWithImage
