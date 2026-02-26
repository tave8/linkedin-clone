import { useEffect, useState } from "react"

import ImageAPI from "../../../assets/js/image-api/ImageAPI"

const AddImageToProfile = () => {
  const profileId = "xxx"

  useEffect(() => {}, [])

  const handleAddImageToProfile = (imageFile) => {
    const imageAPI = new ImageAPI()
    imageAPI
      .addImageToProfile(imageFile, profileId)
      .then((answer) => {
        console.log(answer)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  return (
    <>
      <h1>ADD IMAGE TO PROFILE</h1>
      <input
        type="file"
        accept="image/*"
        // value={imageFile}
        onChange={(event) => {
          handleAddImageToProfile(event.target.files[0])
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

export default AddImageToProfile
