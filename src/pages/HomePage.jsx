import Post from "../components/Post";
import LeftSideBar from "../components/LeftSideBar";
import RightSideBar from "../components/RightSideBar";
import { Container, Row, Col } from "react-bootstrap";

const HomePage = () => {
  return (
    <>
      <main className="sfondo">
        <Container className="pt-3" fluid>
          <Row>
            <Col className="d-none d-lg-block" md={2}>
              <LeftSideBar />
            </Col>
            <Col xs={12} md={6}>
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
