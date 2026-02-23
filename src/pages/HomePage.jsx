import Post from "../components/Post";
import LeftSideBar from "../components/LeftSideBar";
import NavBar from "../components/NavBar";
import RightSideBar from "../components/RightSideBar";
import { Row, Col } from "react-bootstrap";

const HomePage = () => {
  return (
    <>
      <header>
        <NavBar />
        {/* navbar giulia */}
      </header>
      <main className="sfondo">
        <Row>
          <Col className="d-none col-md-2">
            <LeftSideBar />
          </Col>
          <Col xs={12} md={7}>
            <Post /> {/* giorgia */}
          </Col>
          <Col className="d-none col-md-3">
            <RightSideBar />
          </Col>
        </Row>
      </main>
    </>
  );
};
export default HomePage;
