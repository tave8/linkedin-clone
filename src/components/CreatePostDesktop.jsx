import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { CardText, FastForwardBtnFill, Image } from "react-bootstrap-icons";
import CreatePost from "./CreatePost";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";

function CreatePostDesktop() {
  const [modalShow, setModalShow] = React.useState(false);
  const myProfile = useSelector((state) => state.myProfile);

  return (
    <Card className="mb-3 border-0 shadow-sm d-none d-lg-block">
      <Card.Body>
        <div className="d-flex align-items-center mb-3">
          <img
            src={myProfile.data.image}
            roundedCircle
            width={48}
            height={48}
            className="me-2 rounded-circle border"
            alt="Avatar"
            style={{ objectFit: "cover" }}
          />
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

        <CreatePost show={modalShow} onHide={() => setModalShow(false)} />
      </Card.Body>
    </Card>
  );
}

export default CreatePostDesktop;
