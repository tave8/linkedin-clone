/*import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import PostAPI from "../assets/js/post-api/PostAPI";*/

function CreatePost(/*props*/) {
  /*const [text, setText] = useState("");
  const handlePublish = () => {
    const postAPI = new PostAPI();
    const newPostFields = { text };

    postAPI
      .addPost(newPostFields)
      .then((post) => {
        console.log("Post pubblicato:", post);
        setText("");
      })
      .catch((err) => {
        console.error(err);
      });
  };*/
  return; /*(
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur
          ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );*/
}

export default CreatePost;
