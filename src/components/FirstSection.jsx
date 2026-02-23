import { Button, Row, Col } from "react-bootstrap";
import { FaPen } from "react-icons/fa";
import { HiOutlineCheckBadge } from "react-icons/hi2";
import { HiOutlineX } from "react-icons/hi";
import { BsThreeDots } from "react-icons/bs";

const FirstSection = () => {
  return (
    <>
      <section className=" bg-light border border-1 border-secondary-subtle rounded-3">
        <div className="bannerProfile position-relative">
          <img
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=922&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="profileImg"
          />
          <Button className="position-absolute  bottom-50 end-0 bg-light rounded-circle d-flex justify-content-center align-items-center p-2 border border-0">
            <FaPen color="black" size={15} />
          </Button>
          <Button className="position-absolute  bottom-custom-bannerProfile end-0 bg-light rounded-circle d-flex justify-content-center align-items-center p-2 border border-0 bg-transparent">
            <FaPen color="black" size={15} />
          </Button>
        </div>
        {/* name and description */}
        <Row className="container g-0 p-1">
          <Col xs={12} md={8} className="mt-custom-ProfileName">
            <div>
              <Row>
                <Col xs={12} md={6}>
                  <h1 className="ms-1 mb-0 fs-4">Lara Unicorno</h1>
                </Col>
                <Col xs={12} md={6} className="d-flex justify-content-start align-items-center">
                  <p className="m-0 fs-custom-profile-p px-1 p-Verification-badge rounded-5">{<HiOutlineCheckBadge />} Aggiungi badge di verifica</p>
                </Col>
              </Row>
              <p className="m-0 mt-1 lh-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia suscipit architecto velit. Beatae at veniam a distinctio, earum magnam libero
                illo? Optio explicabo, ab assumenda deserunt quos iste tempora eum?
              </p>
              <p className="opacity-50">Firenze</p>
              <p className="blu-profile-p">piu di 500 collegamenti</p>
            </div>
            <Row className="g-3">
              <Col xs={5} md={3} className="d-flex justify-content-center align-items-center">
                <Button className="w-100 btn-profile-firstSection border-custom-bt-firstSection1">Disponibile per</Button>
              </Col>
              <Col xs={5} md={4} className="d-flex justify-content-center align-items-center">
                <Button className="w-100 btn-profile-firstSection border-custom-bt-firstSection">Aggiungi sezione</Button>
              </Col>
              <Col xs={2} md={1} className="d-flex justify-content-center align-items-center">
                <Button className=" btn-profile-firstSection border-custom-bt-firstSection-dot">
                  <BsThreeDots size={10} />
                </Button>
              </Col>
              <Col xs={12} md={4} className="d-flex justify-content-center align-items-center">
                <Button className="w-100 btn-profile-firstSection border-custom-bt-firstSection">Migliora Profilo</Button>
              </Col>
            </Row>
          </Col>
          <Col md={4} className="d-none d-md-flex mt-custom-ProfileName justify-content-center align-items-start gap-1">
            <img
              src="https://images.unsplash.com/photo-1635492491273-455af7728453?q=80&w=1260&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-25"
            />
            <p className="m-0">Cubic Club</p>
          </Col>
          <Row className="justify-content-around mt-3">
            <Col xs={12} lg={5} className="p-3 bg-custom-slide-firstSection rounded-3 lh-1 mb-3">
              <div className="d-flex justify-content-between align-items-center">
                <p className="m-0 fw-semibold">Disponibile a lavorare </p>
                <FaPen />
              </div>
              <p className="m-0">Rouoli di qualcosa di qualcosa..</p>
              <p className="m-0 blu-profile-p text-decoration-underline">Mostra dettagli</p>
            </Col>
            <Col xs={12} lg={5} className="p-3 bg-transparent border border-1 border-secondary-subtle rounded-3 lh-1 mb-3">
              <div className="d-flex justify-content-between align-items-center">
                <p className="m-0 fw-semibold">Disponibile a lavorare </p>
                <HiOutlineX />
              </div>
              <p className="m-0">Rouoli di qualcosa di qualcosa..</p>
              <p className="m-0 blu-profile-p text-decoration-underline">Mostra dettagli</p>
            </Col>
          </Row>
        </Row>
      </section>
    </>
  );
};
export default FirstSection;
// banner img , img profile , user name, description , everything until available to work btns.
