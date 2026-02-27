import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";
import { BellFill, ChatRightDotsFill, HouseDoorFill, PersonFillAdd, Search, BriefcaseFill, Grid3x2GapFill } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { setMessagesTabIsOpenToggleGlobally } from "../redux/actions";

function MyNavbar() {
  const dispatch = useDispatch();
  const myProfile = useSelector((state) => state.myProfile);

  const isAvatarLoading = myProfile.isLoading || !myProfile.data?.image;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const NAV_LINKS = [
    { id: 1, label: "Home", icon: <HouseDoorFill />, to: "/" },
    { id: 2, label: "La mia rete", icon: <PersonFillAdd />, to: "/network" },
    { id: 3, label: "Lavoro", icon: <BriefcaseFill />, to: "/job" },
    { id: 4, label: "Messaggi", icon: <ChatRightDotsFill />, to: "" },
    { id: 5, label: "Notifiche", icon: <BellFill />, to: "/notifications" },
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
              <LinkContainer to={link.to} key={link.id}>
                <Nav.Link
                  className="d-flex flex-column align-items-center px-3 py-2 py-lg-1"
                  onClick={
                    link.id === 4
                      ? (e) => {
                          e.preventDefault();
                          dispatch(setMessagesTabIsOpenToggleGlobally());
                        }
                      : undefined
                  }
                >
                  <span className="fs-5">{link.icon}</span>
                  <span className="small">{link.label}</span>
                </Nav.Link>
              </LinkContainer>
            ))}

            <NavDropdown
              title={
                <div className="d-flex flex-column align-items-center">
                  {isAvatarLoading ? (
                    <div className="rounded-circle border d-flex align-items-center justify-content-center" style={{ width: 24, height: 24 }}>
                      <Spinner animation="border" variant="primary" size="sm" />
                    </div>
                  ) : (
                    <img
                      src={myProfile.data.image}
                      alt="Tu"
                      className="rounded-circle border"
                      width="24"
                      height="24"
                      style={{ objectFit: "cover" }}
                      onError={(e) => {
                        e.currentTarget.src = "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png";
                      }}
                    />
                  )}
                  <span className="small">Tu ▼</span>
                </div>
              }
              id="profile-dropdown"
              className="px-2"
              show={show}
              onToggle={(isOpen) => setShow(isOpen)}
              rootCloseEvent="click"
              autoClose={true}
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
                  <LinkContainer to="/Profile" style={{ textDecoration: "none", color: "#0A66C2", border: "1px solid #0A66C2" }} onClick={handleClose}>
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
