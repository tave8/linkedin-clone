import Modal from "react-bootstrap/Modal";
import { useState, useRef } from "react";
import PostAPI from "../assets/js/post-api/PostAPI";
import { useSelector } from "react-redux";
import { Calendar3, Plus, Image, X } from "react-bootstrap-icons";
import { Button, Stack, Spinner } from "react-bootstrap";

function CreatePost(props) {
  const [text, setText] = useState("");
  const myProfile = useSelector((state) => state.myProfile);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);
  const [isLoading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handlePublish = () => {
    console.log("volte in cui viene chiamato", handlePublish);
    const activeUser = myProfile.apiUser || myProfile.data?._id || localStorage.getItem("activeUserId");
    if (!activeUser) {
      console.error("Nessun utente attivo trovato!");
      return;
    }

    const postAPI = new PostAPI({ apiUser: activeUser });

    /*const postAPI = new PostAPI({
      add the post as the current profile
      apiUser: myProfile.apiUser,
    });*/
    setLoading(true);
    //const newPostFields = { text };

    /*const newPostFields2 = { text }; //per giuseppe
    if (image) newPostFields2.image = image;*/

    postAPI
      .addPostWithOptionalImage({ text }, image)
      .then((post) => {
        console.log("Post pubblicato:", post);
        setText("");
        setImage(null);
        setPreview(null);
        props.onPostCreated?.(post);
        props.onHide();
      })
      .catch((err) => {
        console.error("guarda l'errore", err);
        alert("Errore del server (500). Controlla il formato dell'immagine o il testo.");
        setImage(null);
        setPreview(null);
      })
      .finally(() => {
        setLoading(false);
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
          {preview && (
            <div className="position-relative mt-2">
              <img src={preview} alt="preview" className="img-fluid rounded" />
              <div
                role="button"
                className="position-absolute top-0 end-0 m-1 bg-dark rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "28px", height: "28px" }}
                onClick={() => {
                  setImage(null);
                  setPreview(null);
                }}
              >
                <X size={18} color="white" />
              </div>
            </div>
          )}
        </div>
        <div className="py-3">
          <Stack direction="horizontal" gap={4} className="text-secondary">
            <Image className="icon" size={22} role="button" onClick={() => fileInputRef.current.click()} />
            <input type="file" accept="image/*" ref={fileInputRef} onChange={handleImageChange} className="d-none" />
            <Calendar3 size={20} />
            <Plus size={24} />
          </Stack>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" size="sm" className="rounded-pill px-3 fw-bold" disabled={!text.trim() || isLoading} onClick={handlePublish}>
          {isLoading ? <Spinner animation="border" size="sm" /> : "Pubblica"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CreatePost;
