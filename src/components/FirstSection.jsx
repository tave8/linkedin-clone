import { Button, Row, Col, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FaPen } from "react-icons/fa";
import { HiOutlineX } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import ProfileAPI from "../assets/js/profile-api/ProfileAPI";
import { loadMyDefaultProfileGlobally } from "../redux/actions";
import { useState, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import { HiOutlineCheckBadge } from "react-icons/hi2";

const SezioneProfilo = () => {
  const myProfile = useSelector((state) => state.myProfile);

  const dispatch = useDispatch();

  const arrayBanner = [
    { id: "giorgia", image: "/Banner-GR.jpg" },
    { id: "giulia", image: "/Banner-GC.jpg" },
    { id: "giuseppe", image: "/Banner-GT.jpg" },
    { id: "raffaele", image: "/Banner-RB.jpg" },
    { id: "francesco", image: "/Banner-FD.jpg" },
  ];

  const getBannerByUserName = (name) => {
    if (!name) return "/Banner-GT.jpg";

    const found = arrayBanner.find((banner) => banner.id === name.toLowerCase());

    return found ? found.image : "/Banner-GT.jpg";
  };

  const bannerI = getBannerByUserName(myProfile.data?.name);

  const [modalShow, setModalShow] = useState(false);
  const nameRef = useRef(myProfile.data?.name);
  const surnameRef = useRef(myProfile.data?.surname);
  const jobRef = useRef(myProfile.data?.title);
  const locationRef = useRef(myProfile.data?.area);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Informazioni Profilo</Modal.Title>
        </Modal.Header>

        <Modal.Body className="d-flex flex-column">
          <label htmlFor="avatar">Choose a profile picture:</label>

          <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />

          <label htmlFor="Name">Nome</label>

          <input
            placeholder="write something to change"
            type="text"
            id="Name"
            defaultValue={nameRef.current}
            onChange={(event) => {
              nameRef.current = event.target.value;
            }}
          />

          <label htmlFor="surname">Cognome</label>

          <input
            placeholder="write something to change"
            type="text"
            id="surname"
            defaultValue={surnameRef.current}
            onChange={(event) => {
              surnameRef.current = event.target.value;
            }}
          />

          <label htmlFor="Posizione Lavorativa">actual job position</label>

          <input
            placeholder="write something to change"
            type="text"
            id="Posizione Lavorativa"
            defaultValue={jobRef.current}
            onChange={(event) => {
              jobRef.current = event.target.value;
            }}
          />

          <label htmlFor="location">Posizione</label>

          <input
            placeholder="write something to change"
            type="text"
            id="location"
            defaultValue={locationRef.current}
            onChange={(event) => {
              locationRef.current = event.target.value;
            }}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button
            onClick={() => {
              const profileAPI = new ProfileAPI({
                apiUser: myProfile.apiUser,
              });

              const newProfileFields = {
                name: nameRef.current,
                surname: surnameRef.current,
                title: jobRef.current,
                area: locationRef.current,
              };

              profileAPI
                .updateMyProfile(newProfileFields)
                .then(() => {
                  dispatch(loadMyDefaultProfileGlobally());
                })

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
      <section className="bg-light border border-1 border-secondary-subtle rounded-top mb-3 mt-4">
        <div
          className="position-relative rounded-top "
          style={{
            backgroundImage: `url(${bannerI})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "15vh",
            width: "100%",
          }}
        >
          <img src={myProfile.data?.image} alt="" className="profileImg" />

          <Button className="position-absolute bottom-50 end-0 bg-light rounded-circle d-flex justify-content-center align-items-center p-2 border border-0 me-3">
            <FaPen color="black" size={15} />
          </Button>

          <Button
            onClick={() => setModalShow(true)}
            className="position-absolute bottom-custom-bannerProfile end-0 bg-light rounded-circle d-flex justify-content-center align-items-center p-2 border border-0 bg-transparent me-3"
          >
            <FaPen color="black" size={15} />
          </Button>
        </div>

        <Container className="mt-4 p-3">
          <Row className="p-3">
            <Col xs={12} md={8} className="p-0 d-flex flex-column justify-content-start">
              <div className="d-flex flex-wrap mt-4 align-items-baseline">
                <h1 className="fs-4 fw-bold ">{myProfile.data?.name + " " + myProfile.data?.surname}</h1>
                <HiOutlineCheckBadge className="text-primary ms-1" size={22} title="Profilo Verificato" />
              </div>
              <p className="m-0 mt-1 lh-sm">{myProfile.data?.title}</p>

              <div className="d-flex flex-wrap align-items-center mt-1 text-secondary mb-3" style={{ fontSize: "0.9rem" }}>
                <span>{myProfile.data?.area}</span>
                <span className="mx-2 d-none d-sm-inline">•</span>
                <span className="blu-profile-p fw-bold f-4 d-none d-sm-inline">Informazioni di contatto</span>
              </div>

              <p className="blu-profile-p fw-bold">piu di 500 collegamenti</p>

              <div className="d-flex flex-row flex-wrap gap-3 mb-2">
                <Button className="rounded-5 border-custom-bt-firstSection1" style={{ background: "#0A66C2", border: "2px solid #0A66C2" }}>
                  Disponibile per
                </Button>

                <Button className="rounded-5 btn-linkedin-outline">Aggiungi sezione</Button>

                <Button className="rounded-5 btn-linkedin-outline2">Migliora Profilo</Button>
              </div>
            </Col>

            <Col md={4} className="d-none d-md-flex mt-custom-ProfileName justify-content-center align-items-start gap-1">
              <img
                src="https://images.unsplash.com/photo-1635492491273-455af7728453?q=80&w=1260&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-25"
              />
              <p className="m-0">Cubic Club</p>
            </Col>
          </Row>

          <Row className="d-flex flex-row flex-wrap mb-3 g-2">
            <Col xs={12} md={6}>
              {" "}
              <Card className="bg-custom-slide-firstSection">
                <Card.Body>
                  <div className="d-flex flex-row flex-nowrap justify-content-between">
                    {" "}
                    <Card.Text className="fw-semibold mb-0">Disponibile a lavorare</Card.Text>
                    <FaPen />
                  </div>

                  <Card.Text className="m-0">Ruoli di qualcosa di qualcosa..</Card.Text>

                  <Card.Text className="m-0 blu-profile-p text-decoration-underline">Mostra dettagli</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              {" "}
              <Card>
                <Card.Body>
                  <div className="d-flex flex-row flex-nowrap justify-content-between">
                    {" "}
                    <Card.Text className="fw-semibold mb-0">Disponibile a lavorare</Card.Text>
                    <HiOutlineX />
                  </div>

                  <Card.Text className="m-0">Ruoli di qualcosa di qualcosa..</Card.Text>

                  <Card.Text className="m-0 blu-profile-p text-decoration-underline">Mostra dettagli</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default SezioneProfilo;
