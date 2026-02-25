import { FaPen } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { useState } from "react";

const InfoProfile = (props) => {
  const [modalShow, setModalShow] = useState(false);
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Informazioni</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <textarea
            className="w-100"
            placeholder="Change your info"
            name="change info"
            values="text"
            style={{
              resize: "none",
              outline: "none",
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button>Save changes</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  return (
    <>
      <section className=" bg-light border border-1 border-secondary-subtle rounded-3 container pt-2 mb-3">
        <div className="d-flex justify-content-between align-items-center">
          <p className="m-0 fs-5 fw-semibold">Informazioni</p>
          <Button onClick={() => setModalShow(true)} className=" p-0 d-flex justify-content-center align-items-center  border border-0 bg-transparent ">
            <FaPen color="black" size={15} />
          </Button>
          <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
        </div>
        <p>{props.profile.data.bio}</p>
      </section>
    </>
  );
};
export default InfoProfile;
