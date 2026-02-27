import { useState, useRef } from "react";
import { Calendar3, Plus, Image, X } from "react-bootstrap-icons";
import { Button, Offcanvas, Stack } from "react-bootstrap";
import PostAPI from "../assets/js/post-api/PostAPI";
import { useSelector } from "react-redux";

function PublishOffcanvas({ show, handleClose, handleShow, ...props }) {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const myProfile = useSelector((state) => state.myProfile);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handlePublish = async () => {
    setLoading(true);
    try {
      const postAPI = new PostAPI({
        apiUser: myProfile.apiUser || localStorage.getItem("activeUserId"),
      });

      const result = await postAPI.addPostWithOptionalImage({ text }, image);
      console.log("Post pubblicato:", result);

      // Pulisci tutto subito dopo il successo
      setText("");
      setImage(null);
      if (typeof props.onHide === "function") {
        props.onHide();
      } else {
        console.warn("Attenzione: la prop onHide non è stata passata correttamente!");
      }
    } catch (err) {
      console.error("Errore finale:", err);
    } finally {
      setLoading(false); // Sblocca il bottone sempre!
    }
  };

  /* const handlePublish = () => {
    const postAPI = new PostAPI();
    const newPostFields = { text };

    if (image) newPostFields.image = image;

    postAPI
      .addPost(newPostFields)
      .then((post) => {
        console.log("Post pubblicato:", post);
        setText("");
        handleClose();
      })
      .catch((err) => {
        console.error(err);
        setImage(null);
        setPreview(null);
      });
  };*/

  return (
    <>
      <Button
        type="button"
        variant="primary"
        onClick={(e) => {
          e.stopPropagation();
          handleShow();
        }}
        className="rounded-circle d-flex align-items-center justify-content-center border-0 p-0"
        style={{
          width: "44px",
          height: "44px",
          backgroundColor: "transparent",
          position: "relative",
          zIndex: 9999,
        }}
      >
        {name}
      </Button>

      <Offcanvas {...props} show={show} onHide={handleClose} placement="bottom" className="h-100" restoreFocus={false}>
        <Offcanvas.Header className="border-bottom d-flex align-items-center justify-content-between px-3">
          <div className="d-flex align-items-center gap-3">
            <div
              onClick={handleClose}
              role="button"
              className="d-flex align-items-center justify-content-center"
              style={{ width: "40px", height: "40px", marginLeft: "-10px", zIndex: "99999" }}
            >
              <X size={35} color="black" />
            </div>

            <img src={myProfile.data.image} width={32} height={32} className="rounded-circle border" alt="profile" style={{ objectFit: "cover" }} />
          </div>

          <Button variant="outline-primary" size="sm" className="rounded-pill px-3 fw-bold" disabled={!text.trim() || loading} onClick={handlePublish}>
            Pubblica
          </Button>
        </Offcanvas.Header>

        <Offcanvas.Body className="d-flex flex-column">
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

          <div className="py-3 border-top">
            <Stack direction="horizontal" gap={4} className="text-secondary">
              <Image className="icon" size={22} role="button" onClick={() => fileInputRef.current.click()} />
              <input type="file" accept="image/*" ref={fileInputRef} onChange={handleImageChange} className="d-none" />
              <Calendar3 size={20} />
              <Plus size={24} />
            </Stack>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default PublishOffcanvas;
