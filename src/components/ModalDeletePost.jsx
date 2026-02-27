import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PostAPI from "../assets/js/post-api/PostAPI";
import { useSelector } from "react-redux";

function ModalDeletePost(props) {
  const myProfileId = useSelector((state) => state.myProfile.data?._id);
  const postAPI = new PostAPI({ apiUser: myProfileId });
  const postId = props.postId;

  const handleDelete = () => {
    if (!myProfileId || !postId) {
      console.error("Dati mancanti per l'eliminazione!");
      return;
    }
    postAPI
      .deletePostById(postId)
      .then((textResponse) => {
        console.log("Post eliminato", textResponse);
        window.location.reload();
        //props.onHide();
      })
      .catch((err) => {
        console.error("Ancora 401? Verifica API_TOKENS!", err);
      });
  };
  const statoCompleto = useSelector((state) => state);
  console.log("CONTENUTO REDUX:", statoCompleto);
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Elimina il post</Modal.Title>
      </Modal.Header>
      <Modal.Body>Vuoi eliminare il tuo post?</Modal.Body>
      <Modal.Body className="d-flex justify-content-evenly mb-4">
        <Button
          variant="outline-danger"
          className="rounded-5 btn-linkedin-outline-Delete"
          onClick={() => {
            handleDelete();
          }}
        >
          Sì, elimina il post
        </Button>
        <Button className="rounded-5" style={{ background: "#0a66c2" }} onClick={props.onHide}>
          Annulla
        </Button>
      </Modal.Body>
    </Modal>
  );
}

export default ModalDeletePost;
