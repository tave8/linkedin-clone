import { useState } from "react";
import { Container, Nav, Navbar, Form, InputGroup, Spinner } from "react-bootstrap";
import { BellFill, ChatRightDotsFill, HouseDoorFill, PersonFillAdd, Search, BriefcaseFill, PlusSquareFill } from "react-bootstrap-icons";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector } from "react-redux";
import ProfileOffcanvas from "./ProfileOffcanvas";
//import PublishOffcanvas from "./PublishOffcanvas"
import CreatePostDesktop from "./CreatePostDesktop";

function MobileNavabar() {
  const myProfile = useSelector((state) => state.myProfile);
  const [showProfile, setShowProfile] = useState(false);
  const [showPublish, setShowPublish] = useState(false);
  const isAvatarLoading = myProfile.isLoading || !myProfile.data?.image;

  return (
    <div className="mobile-wrapper">
      <Navbar bg="white" className="border-bottom fixed-top px-2 py-2">
        <Container fluid className="d-flex align-items-center">
          <div onClick={() => setShowProfile(true)} style={{ cursor: "pointer" }}>
            {isAvatarLoading ? (
              <div className="rounded-circle border d-flex align-items-center justify-content-center" style={{ width: 34, height: 34 }}>
                <Spinner animation="border" variant="primary" size="sm" role="status" />
              </div>
            ) : (
              <img
                src={myProfile.data.image}
                alt="Logo"
                className="rounded-circle border"
                width={34}
                height={34}
                style={{ objectFit: "cover" }}
                onError={(e) => {
                  e.currentTarget.src = "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png";
                }}
              />
            )}
          </div>
          <Form className="flex-grow-1 mx-3 ">
            <InputGroup size="sm" className="bg-light rounded">
              <InputGroup.Text className="bg-light border-end-0">
                <Search size={14} />
              </InputGroup.Text>
              <Form.Control type="search" placeholder="Cerca" className="bg-light border-start-0 shadow-none" />
            </InputGroup>
          </Form>
          <Nav.Link href="#messages" className="p-0 text-secondary">
            <ChatRightDotsFill size={24} />
          </Nav.Link>
        </Container>
      </Navbar>

      <ProfileOffcanvas show={showProfile} handleClose={() => setShowProfile(false)} />
      {/*<PublishOffcanvas show={showPublish} handleClose={() => setShowPublish(false)} />*/}
      <CreatePostDesktop show={showPublish} onHide={() => setShowPublish(false)} onPostCreated={() => setShowPublish(false)} />

      <nav className="navbar fixed-bottom bg-white border-top py-2">
        <Container fluid className="px-0">
          <div className="d-flex justify-content-around w-100">
            <LinkContainer to="/">
              <Nav.Link className="d-flex flex-column align-items-center text-secondary p-1">
                <HouseDoorFill className="fs-3" /> <span style={{ fontSize: "12px" }}>Home</span>
              </Nav.Link>
            </LinkContainer>
            <Nav.Link href="#network" className="d-flex flex-column align-items-center text-secondary p-1">
              <PersonFillAdd className="fs-3" /> <span style={{ fontSize: "12px" }}>Rete</span>
            </Nav.Link>

            <Nav.Link onClick={() => setShowPublish(true)} className="d-flex flex-column align-items-center text-secondary p-1">
              <PlusSquareFill className="fs-3" /> <span style={{ fontSize: "12px" }}>Pubblica</span>
            </Nav.Link>

            <LinkContainer to="/notifiche">
              <Nav.Link href="#notifications" className="d-flex flex-column align-items-center text-secondary p-1">
                <BellFill className="fs-3" /> <span style={{ fontSize: "12px" }}>Notifiche</span>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/job">
              <Nav.Link className="d-flex flex-column align-items-center text-secondary p-1">
                <BriefcaseFill className="fs-3" /> <span style={{ fontSize: "12px" }}>Lavoro</span>
              </Nav.Link>
            </LinkContainer>
          </div>
        </Container>
      </nav>
    </div>
  );
}

export default MobileNavabar;
