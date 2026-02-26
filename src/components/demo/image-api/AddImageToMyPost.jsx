import { useEffect, useState } from "react"

import ImageAPI from "../../../assets/js/image-api/ImageAPI"

const AddImageToPost = () => {
  const postId = "69a02a802a4669001512aa58"
  // const postId = "69a02aac2a4669001512aa5a"

  useEffect(() => {}, [])

  const handleAddImageToMyPost = (imageFile) => {
    // console.log(imageFile)
    const imageAPI = new ImageAPI()
    imageAPI
      .addImageToMyPost(imageFile, postId)
      .then((updatedPost) => {
        console.log(updatedPost)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  return (
    <>
      <h1>ADD IMAGE TO MY POST</h1>
      <input
        type="file"
        accept="image/*"
        // value={imageFile}
        onChange={(event) => {
          // setImageFile(event.target.files[0])
          handleAddImageToMyPost(event.target.files[0])
        }}
      />
      {/* {post && (
        <div>
          <p>
            "{post.text}" di {post.username} - ID: {post._id}
          </p>
          <p></p>
        </div>
      )} */}
      {/* <button onClick={handleAddImageToPost}>add image to post</button> */}
      {/* {!post && <p>Loading...</p>} */}
    </>
  )
}

export default AddImageToPost
