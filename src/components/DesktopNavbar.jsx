import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";
import { BellFill, ChatRightDotsFill, HouseDoorFill, PersonFillAdd, Search, BriefcaseFill, Grid3x2GapFill } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { Row } from "react-bootstrap";
import { Button } from "react-bootstrap";

function MyNavbar() {
  const myProfile = useSelector((state) => state.myProfile);

  const NAV_LINKS = [
    { id: 1, label: "Home", icon: <HouseDoorFill />, href: "/" },
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
            <Navbar.Brand className="me-2">
              <img src="./logo-linkedin.png" alt="Logo" height="34px" />
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
                  <img src={myProfile.data.image} alt="Tu" className="rounded-circle border" width="24" height="24" style={{ objectFit: "cover" }} />
                  <span className="small">Tu ▼</span>
                </div>
              }
              id="profile-dropdown"
              className="px-2"
            >
              <NavDropdown.Header href="#settings" style={{ width: "280px" }}></NavDropdown.Header>
              <div className="px-3 py-2" style={{ width: "280px" }}>
                <div className="d-flex flex-column">
                  <img src={myProfile.data.image} className="mb-2 rounded-circle border" width={60} height={60} style={{ objectFit: "cover" }} />
                  <h5 className="mb-0">
                    {myProfile.data.name} {myProfile.data.surname}
                  </h5>
                  <p className="mb-0 h6">{myProfile.data.title}</p>
                  <p className="text-secondary small mb-3">{myProfile.data.area}</p>
                  <LinkContainer to="/Profile" style={{ textDecoration: "none", color: "#0A66C2", border: "1px solid #0A66C2" }}>
                    <Button className="rounded-5 fw-bold w-100" variant="outline" style={{ fontSize: "0.85rem" }}>
                      Visualizza Profilo
                    </Button>
                  </LinkContainer>
                </div>
              </div>
              <NavDropdown.Divider />
              <div className="px-3 py-2">
                <h6>Account</h6>
                <p className="small text-secondary mb-0">Impostazioni e Privacy</p>
                <p className="small text-secondary mb-0">Guida</p>
                <p className="small text-secondary mb-0">Lingua</p>
              </div>
              <NavDropdown.Divider />
              <div className="px-3">
                <p className="mb-1">Esci</p>
              </div>
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
