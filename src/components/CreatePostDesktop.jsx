import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { CardText, FastForwardBtnFill, Image } from "react-bootstrap-icons";
import CreatePost from "./CreatePost";
import { Card, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";

function CreatePostDesktop({ onPostCreated, show, onHide }) {
  const [modalShow, setModalShow] = React.useState(false);
  const myProfile = useSelector((state) => state.myProfile);
  const isAvatarLoading = myProfile.isLoading || !myProfile.data?.image;
  const isOpen = show !== undefined ? show : modalShow;
  const handleClose = onHide || (() => setModalShow(false));

  return (
    <Card className="mb-3 border-0 shadow-sm d-none d-lg-block">
      <Card.Body>
        <div className="d-flex align-items-center mb-3">
          {isAvatarLoading ? (
            <div className="me-2 rounded-circle border d-flex align-items-center justify-content-center" style={{ width: 48, height: 48 }}>
              <Spinner animation="border" variant="primary" size="sm" role="status" />
            </div>
          ) : (
            <img
              src={myProfile.data.image}
              width={48}
              height={48}
              className="me-2 rounded-circle border"
              alt="Avatar"
              style={{ objectFit: "cover" }}
              onError={(e) => {
                e.currentTarget.src = "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png";
              }}
            />
          )}
          <Button variant="light" className="rounded-pill flex-grow-1 text-start border text-muted ps-3 py-2" onClick={() => setModalShow(true)}>
            Crea un post
          </Button>
        </div>

        <Row className="g-0 d-flex justify-content-evenly">
          <Col md={3}>
            <Button variant="light" className="w-100 d-flex align-items-center justify-content-center py-2" onClick={() => setModalShow(true)}>
              <span>
                <FastForwardBtnFill className="me-1 mb-1" style={{ color: "#378FE9" }} width={20} height={20} /> Video
              </span>
            </Button>
          </Col>
          <Col md={3}>
            <Button
              variant="light"
              className="w-100 d-flex align-items-center justify-content-center py-2 text-decoration-none text-dark"
              onClick={() => setModalShow(true)}
            >
              <Image className="me-1" style={{ color: "#5F9B41" }} width={18} height={18} />
              Foto
            </Button>
          </Col>
          <Col md={3}>
            <Button variant="light" className="w-100 d-flex align-items-center justify-content-center py-2" onClick={() => setModalShow(true)}>
              <span>
                <CardText className="me-1 mb-1" style={{ color: "#E06847" }} width={18} height={18} /> Articolo
              </span>
            </Button>
          </Col>
        </Row>

        <CreatePost
          show={isOpen}
          onHide={handleClose}
          onPostCreated={(post) => {
            onPostCreated(post);
            handleClose();
          }}
        />
      </Card.Body>
    </Card>
  );
}

export default CreatePostDesktop;
