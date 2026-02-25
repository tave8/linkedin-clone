import Post from "../components/Post";
import LeftSideBar from "../components/LeftSideBar";
import RightSideBar from "../components/RightSideBar";
import CreatePostDesktop from "../components/CreatePostDesktop";
import { Container, Row, Col } from "react-bootstrap";

const HomePage = () => {
  return (
    <>
      <main className="sfondo">
        <Container className="pt-3" fluid>
          <Row className="justify-content-center">
            <Col className="d-none d-lg-block" md={2}>
              <LeftSideBar />
            </Col>
            <Col xs={12} md={6}>
              <CreatePostDesktop />
              <Post />
            </Col>
            <Col className="d-none d-md-block" md={3}>
              <RightSideBar />
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
};
export default HomePage;
