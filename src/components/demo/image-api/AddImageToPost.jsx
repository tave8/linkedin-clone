import { useEffect, useState } from "react"

import ImageAPI from "../../../assets/js/image-api/ImageAPI"

const AddImageToPost = () => {
  // const [imageFile, setImageFile] = useState("")
  const postId = "xxx"

  useEffect(() => {}, [])

  const handleAddImageToPost = (imageFile) => {
    // console.log(imageFile)
    const imageAPI = new ImageAPI()
    imageAPI
      .addImageToPost(imageFile, postId)
      .then((answer) => {
        console.log(answer)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  return (
    <>
      <h1>ADD IMAGE TO POST</h1>
      <input
        type="file"
        accept="image/*"
        // value={imageFile}
        onChange={(event) => {
          // setImageFile(event.target.files[0])
          handleAddImageToPost(event.target.files[0])
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
