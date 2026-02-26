import Post from "../components/Post";
import LeftSideBar from "../components/LeftSideBar";
import RightSideBar from "../components/RightSideBar";
import { Container, Row, Col, Button } from "react-bootstrap";
import PostAPI from "../assets/js/post-api/PostAPI";
import { useEffect, useState, useRef } from "react";
import { IoIosSend } from "react-icons/io";
import Accordion from "react-bootstrap/Accordion";
import CreatePostDesktop from "../components/CreatePostDesktop";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable, useGSAP);

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const accordionRef = useRef(null);
  const containerRef = useRef(null);
  const arrayMessage = ["come va?", "bene tu?", "ciao ragazzi!"];
  const handleClosePost = (postId) => {
    setPosts((prev) => prev.filter((p) => p._id !== postId)); // NOTA PER ME : tengo nello stato tutti quelli con id diverso
  };

  useEffect(() => {
    const postAPI = new PostAPI();

    postAPI
      .getMostRecentPosts()
      .then((posts) => {
        console.log("posts:", posts);
        setPosts(posts); // salvo
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useGSAP(() => {
    const [draggable] = Draggable.create(accordionRef.current, {
      type: "x,y",
      bounds: containerRef.current,
    });
    return () => {
      draggable.kill();
    };
  });

  return (
    <main className="sfondo position-relative">
      <div ref={containerRef} className="bg-transparent vh-100 w-100 position-fixed top-custom-accrodion"></div>
      <Container className="pt-3" fluid>
        <Row>
          <Col className="d-none d-lg-block" md={3}>
            <LeftSideBar />
          </Col>
          <Col xs={12} md={6}>
            <CreatePostDesktop />
            {/* <Post /> */}
            {posts.map((singlePost) => (
              <Post key={singlePost._id} post={singlePost} onClose={handleClosePost} />
            ))}
          </Col>

          <Col className="d-none d-md-block" md={3}>
            <RightSideBar />
          </Col>
        </Row>
      </Container>
      <Accordion ref={accordionRef} className="position-absolute bottom-0 end-0 w-25 position-fixed">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Messaggi</Accordion.Header>
          <Accordion.Body>
            <div>
              <p>Team 3 ChatGroup</p>
              <hr />
              {arrayMessage.map((e) => {
                return <p>{e}</p>;
              })}
              <hr />
              <div className="d-flex align-items-center gap-1">
                <input type="text" placeholder="start messagging" />
                <Button onClick={() => {}} className="px-2 py-1 d-flex align-items-center">
                  <IoIosSend />
                </Button>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </main>
  );
};
export default HomePage;
