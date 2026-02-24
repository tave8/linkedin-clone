/*import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import PostAPI from "../assets/js/post-api/PostAPI";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

render(<App />);




function ContainerFluidBreakpointExample() {
  const [text, setText] = useState("");

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
  };

  return (
    <Container fluid="md">
      <Row>
        <Col md={2}>
          <Image src="https://placecats.com/200/200" roundedCircle width={50} height={50} alt="Avatar" />
        </Col>
        <Col className="flex-grow-1">
          {" "}
          <textarea
            className="form-control border-0 shadow-none p-0 fs-5"
            placeholder="Di cosa vorresti parlare?"
            rows="5"
            style={{ resize: "none" }}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </Col>
      </Row>
      <Row>
        <Col>1 of 1</Col>
        <Col>1 of 1</Col>
        <Col>1 of 1</Col>
      </Row>
    </Container>
  );
}

export default ContainerFluidBreakpointExample;*/
