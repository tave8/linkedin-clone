import { useState } from "react";
import { Calendar3, Plus, Image, X } from "react-bootstrap-icons";
import { Button, Offcanvas, Stack } from "react-bootstrap";
import PostAPI from "../assets/js/post-api/PostAPI";

function PublishOffcanvas({ show, handleClose, handleShow, ...props }) {
  const [text, setText] = useState("");

  const handlePublish = () => {
    const postAPI = new PostAPI();
    const newPostFields = { text };

    postAPI
      .addPost(newPostFields)
      .then((post) => {
        console.log("Post pubblicato:", post);
        setText("");
        handleClose();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <Button
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

            <img src="/logo-linkedin.png" width={32} height={32} className="rounded-circle border" alt="profile" />
          </div>

          <Button variant="outline-primary" size="sm" className="rounded-pill px-3 fw-bold" disabled={!text.trim()} onClick={handlePublish}>
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
          </div>

          <div className="py-3 border-top">
            <Stack direction="horizontal" gap={4} className="text-secondary">
              <Image size={22} />
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
