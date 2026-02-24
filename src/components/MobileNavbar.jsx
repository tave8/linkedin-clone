import { useState } from "react";
import { Container, Nav, Navbar, Form, InputGroup } from "react-bootstrap";
import { BellFill, ChatRightDotsFill, HouseDoorFill, PersonFillAdd, Search, BriefcaseFill, PlusSquareFill } from "react-bootstrap-icons";

import ProfileOffcanvas from "./ProfileOffcanvas";
import PublishOffcanvas from "./PublishOffcanvas";

function MobileNavabar() {
  const [showProfile, setShowProfile] = useState(false);
  const [showPublish, setShowPublish] = useState(false);

  return (
    <div className="mobile-wrapper">
      <Navbar bg="white" className="border-bottom fixed-top px-2 py-2">
        <Container fluid className="d-flex align-items-center">
          <div onClick={() => setShowProfile(true)} style={{ cursor: "pointer" }}>
            <img src="/logo-linkedin.png" alt="Profilo" className="rounded-circle border" height="34px" />
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
      <PublishOffcanvas show={showPublish} handleClose={() => setShowPublish(false)} />

      <nav className="navbar fixed-bottom bg-white border-top py-2">
        <Container fluid className="px-0">
          <div className="d-flex justify-content-around w-100">
            <Nav.Link href="#home" className="d-flex flex-column align-items-center text-secondary p-1">
              <HouseDoorFill className="fs-3" /> <span style={{ fontSize: "12px" }}>Home</span>
            </Nav.Link>
            <Nav.Link href="#network" className="d-flex flex-column align-items-center text-secondary p-1">
              <PersonFillAdd className="fs-3" /> <span style={{ fontSize: "12px" }}>Rete</span>
            </Nav.Link>

            <Nav.Link onClick={() => setShowPublish(true)} className="d-flex flex-column align-items-center text-secondary p-1">
              <PlusSquareFill className="fs-3" /> <span style={{ fontSize: "12px" }}>Pubblica</span>
            </Nav.Link>

            <Nav.Link href="#notifications" className="d-flex flex-column align-items-center text-secondary p-1">
              <BellFill className="fs-3" /> <span style={{ fontSize: "12px" }}>Notifiche</span>
            </Nav.Link>
            <Nav.Link href="#jobs" className="d-flex flex-column align-items-center text-secondary p-1">
              <BriefcaseFill className="fs-3" /> <span style={{ fontSize: "12px" }}>Lavoro</span>
            </Nav.Link>
          </div>
        </Container>
      </nav>
    </div>
  );
}

export default MobileNavabar;
