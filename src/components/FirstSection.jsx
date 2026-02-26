import { Button, Row, Col } from "react-bootstrap";
import { FaPen } from "react-icons/fa";
import { HiOutlineCheckBadge } from "react-icons/hi2";
import { HiOutlineX } from "react-icons/hi";
import { BsThreeDots } from "react-icons/bs";
import { useSelector } from "react-redux";
import ProfileAPI from "../assets/js/profile-api/ProfileAPI";

import { useState, useRef } from "react";
import Modal from "react-bootstrap/Modal";

const FirstSection = (props) => {
  const myProfile = useSelector((state) => state.myProfile);
  const arrayBanner = [
    { id: "giorgia", image: "/Banner-GR.jpg" },
    { id: "giulia", image: "/Banner-GC.jpg" },
    { id: "giuseppe", image: "/Banner-GT.jpg" },
    { id: "raffaele", image: "/Banner-RB.jpg" },
    { id: "francesco", image: "/Banner-FD.jpg" },
  ];

  const getBannerByUserName = (name) => {
    const found = arrayBanner.find((banner) => banner.id.toLowerCase() === name.toLowerCase());
    return found ? found.image : "/Banner-GT.jpg";
  };

  //chiamaaaaaaa
  const bannerI = getBannerByUserName(myProfile.data?.name);

  const [modalShow, setModalShow] = useState(false);
  const nameRef = useRef(myProfile.name);
  const surnameRef = useRef(myProfile.surname);
  const jobRef = useRef(myProfile.title);
  const locationRef = useRef(myProfile.area);
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Informazioni Profilo</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column">
          <label htmlFor="Name">Nome</label>
          <input
            placeholder="write something to change"
            type="text"
            id="Name"
            value={nameRef.current}
            onChange={(event) => {
              nameRef.current = event.target.value;
            }}
          />
          <label htmlFor="surname">Cognome</label>
          <input
            placeholder="write something to change"
            type="text"
            id="surname"
            value={surnameRef.current}
            onChange={(event) => {
              surnameRef.current = event.target.value;
            }}
          />
          <label htmlFor="Posizione Lavorativa">actual job position</label>
          <input
            placeholder="write something to change"
            type="text"
            id="Posizione Lavorativa"
            value={jobRef.current}
            onChange={(event) => {
              jobRef.current = event.target.value;
            }}
          />
          <label htmlFor="location">Posizione</label>
          <input
            placeholder="write something to change"
            type="text"
            id="location"
            value={locationRef.current}
            onChange={(event) => {
              locationRef.current = event.target.value;
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              console.log(nameRef.current, surnameRef.current, jobRef.current, locationRef.current);
              const profileAPI = new ProfileAPI({
                apiUser: myProfile.apiUser,
              });
              const newProfileFields = {
                // more fields if needed
                name: nameRef.current,
                surname: surnameRef.current,
                title: jobRef.current,
                area: locationRef.current,
              };
              profileAPI
                .updateMyProfile(newProfileFields)
                .then((profile) => {})
                .catch((err) => {
                  console.error(err);
                });
              setModalShow(false);
            }}
          >
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
  return (
    <>
      <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
      <section className=" bg-light border border-1 border-secondary-subtle rounded-3 mb-3">
        <div
          className=" position-relative"
          style={{
            backgroundImage: `url(${bannerI})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "15vh",
            width: "100%",
          }}
        >
          <img src={props.profile.data.image} alt="" className="profileImg" />
          <Button className="position-absolute  bottom-50 end-0 bg-light rounded-circle d-flex justify-content-center align-items-center p-2 border border-0 me-3">
            <FaPen color="black" size={15} />
          </Button>
          <Button
            onClick={() => setModalShow(true)}
            className="position-absolute  bottom-custom-bannerProfile end-0 bg-light rounded-circle d-flex justify-content-center align-items-center p-2 border border-0 bg-transparent me-3"
          >
            <FaPen color="black" size={15} />
          </Button>
        </div>
        {/* name and description */}
        <Row className="container g-0 p-2 justify-content-center">
          <Col xs={12} md={8} className="mt-custom-ProfileName">
            <div>
              <Row>
                <Col xs={12} md={6}>
                  <h1 className=" mb-0 fs-4">{props.profile.data.name + " " + props.profile.data.surname}</h1>
                </Col>
                <Col xs={12} md={6} className="d-flex justify-content-start align-items-center">
                  <p className="m-0 fs-custom-profile-p px-1 p-Verification-badge rounded-5">{<HiOutlineCheckBadge />} Aggiungi badge di verifica</p>
                </Col>
              </Row>
              <p className="m-0 mt-1 lh-sm">{props.profile.data.title}</p>
              <p className="opacity-50">{props.profile.data.area}</p>
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
