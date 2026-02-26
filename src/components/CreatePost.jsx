import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import PostAPI from "../assets/js/post-api/PostAPI";
import { useSelector } from "react-redux";
import { Calendar3, Plus, Image } from "react-bootstrap-icons";
import { Button, Offcanvas, Stack } from "react-bootstrap";

function CreatePost(props) {
  const [text, setText] = useState("");
  const myProfile = useSelector((state) => state.myProfile);
  const handlePublish = () => {
    const postAPI = new PostAPI({
      // add the post as the current profile
      apiUser: myProfile.apiUser
    });
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
  };
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <div className="d-flex flex-row align-items-center">
          <img src={myProfile.data.image} width={52} height={52} className="rounded-circle border" alt="profile" style={{ objectFit: "cover" }} />
          <div className="ms-2 d-flex flex-column">
            <h4 className="mb-0 fs-5 fw-bold">
              {myProfile.data.name} {myProfile.data.surname}
            </h4>
            <p className="small text-secondary-emphasis mb-0 mt-n1">
              Pubblica: <strong>Chiunque</strong>
            </p>
          </div>
        </div>
      </Modal.Header>
      <Modal.Body>
        <div className="flex-grow-1">
          <textarea
            className="form-control border-0 shadow-none p-0 fs-5"
            placeholder="Di cosa vorresti parlare?"
            rows="5"
            style={{ resize: "none" }}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="py-3">
          <Stack direction="horizontal" gap={4} className="text-secondary">
            <Image size={22} />
            <Calendar3 size={20} />
            <Plus size={24} />
          </Stack>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" size="sm" className="rounded-pill px-3 fw-bold" disabled={!text.trim()} onClick={handlePublish}>
          Pubblica
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CreatePost;
