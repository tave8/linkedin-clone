import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";
import { BellFill, ChatRightDotsFill, HouseDoorFill, PersonFillAdd, Search, BriefcaseFill, Grid3x2GapFill } from "react-bootstrap-icons";

function MyNavbar() {
  const NAV_LINKS = [
    { id: 1, label: "Home", icon: <HouseDoorFill />, href: "#home" },
    { id: 2, label: "La mia rete", icon: <PersonFillAdd />, href: "#network" },
    { id: 3, label: "Lavoro", icon: <BriefcaseFill />, href: "#jobs" },
    { id: 4, label: "Messaggi", icon: <ChatRightDotsFill />, href: "#messages" },
    { id: 5, label: "Notifiche", icon: <BellFill />, href: "#notifications" },
  ];

  return (
    <Navbar expand="lg" className="bg-white border-bottom sticky-top py-0" variant="light">
      <Container>
        <div className="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
          <LinkContainer to="/">
            <Navbar.Brand href="#home" className="me-2">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/200px-Linkedin_icon.svg.png" alt="Logo" height="34px" />
            </Navbar.Brand>
          </LinkContainer>

          <Form className="flex-grow-1" style={{ maxWidth: "280px" }}>
            <InputGroup size="sm">
              <InputGroup.Text className="bg-light border-end-0">
                <Search size={14} />
              </InputGroup.Text>
              <Form.Control type="search" placeholder="Cerca" className="bg-light border-start-0 shadow-none" />
            </InputGroup>
          </Form>
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 shadow-none" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {NAV_LINKS.map((link) => (
              <Nav.Link key={link.id} href={link.href} className="d-flex flex-column align-items-center px-3 py-2 py-lg-1">
                <span className="fs-5">{link.icon}</span>
                <span className="small">{link.label}</span>
              </Nav.Link>
            ))}

            <NavDropdown
              title={
                <div className="d-flex flex-column align-items-center">
                  <img src="/logo-linkedin.png" alt="Tu" className="rounded-circle" width="24" height="24" />
                  <span className="small">Tu ▼</span>
                </div>
              }
              id="profile-dropdown"
              className="px-2"
            >
              <NavDropdown.Header href="#settings">Impostazioni e Privacy</NavDropdown.Header>
              <LinkContainer to="/Profile">
                <NavDropdown.Item>Account</NavDropdown.Item>
              </LinkContainer>

              <NavDropdown.Item href="#help">Guida</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#logout">Esci</NavDropdown.Item>
            </NavDropdown>

            <div className="mx-2" style={{ height: "40px", alignSelf: "center" }}></div>

            <Nav.Link href="#business" className="d-flex flex-column align-items-center px-3">
              <Grid3x2GapFill className="fs-5" />
              <span className="small text-nowrap">Per le aziende</span>
            </Nav.Link>

            <Nav.Link href="#premium" className="small text-center text-decoration-underline gold-text" style={{ fontSize: "12px", color: "#915907" }}>
              Prova Premium <br /> gratis
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
