import { useEffect, useState } from "react"

import ImageAPI from "../../../assets/js/image-api/ImageAPI"

const AddImageToMyProfile = () => {
  useEffect(() => {}, [])

  const handleAddImageToProfile = (imageFile) => {
    const imageAPI = new ImageAPI({
      apiUser: "raffaele",
    })
    imageAPI
      .addImageToMyProfile(imageFile)
      .then((updatedProfile) => {
        console.log(updatedProfile)
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

export default AddImageToMyProfile
