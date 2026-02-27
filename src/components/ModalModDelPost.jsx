import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";
import ModalDeletePost from "./ModalDeletePost";

function ModalModDelPost(props) {
  const [modalShowDelete, setModalShowDelete] = React.useState(false);

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="example-custom-modal-styling-title">Modifica o elimina il tuo post</Modal.Title>
      </Modal.Header>
      <Modal.Body>Seleziona la modalità giusta per il tuo post:</Modal.Body>
      <Modal.Body className="d-flex justify-content-evenly mb-4">
        <Button className="rounded-5" style={{ background: "#0a66c2" }}>
          Modifica il post
        </Button>
        <Button variant="outline-danger" className="rounded-5 btn-linkedin-outline-Delete" onClick={() => setModalShowDelete(true)}>
          Elimina il post
        </Button>
        <ModalDeletePost show={modalShowDelete} onHide={() => setModalShowDelete(false)} postId={props.postId} />
      </Modal.Body>
    </Modal>
  );
}

export default ModalModDelPost;
