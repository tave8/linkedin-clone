import { Card, Image, ListGroup, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { useSelector } from "react-redux";

// qui perche se no ogni volta che renderizza cambiano
const generateRandomStats = () => {
  return {
    secondrandom: Math.floor(Math.random() * 500) + 50,
    firstrandom: Math.floor(Math.random() * 80),
    random: Math.floor(Math.random() * 100),
    thirdrandom: Math.floor(Math.random() * 700) + 50,
    againrandom: Math.floor(Math.random() * 300) + 50,
  };
};

const LeftSideBar = () => {
  const [stats] = useState(generateRandomStats());
  const myProfile = useSelector((state) => state.myProfile);
  const arrayBanner = [
    { id: "Giorgia", image: "/Banner-GR.jpg" },
    { id: "Giulia", image: "/Banner-GC.jpg" },
    { id: "Giuseppe", image: "/Banner-GT.jpg" },
    { id: "Raffaele", image: "/Banner-RB.jpg" },
    { id: "Francesco", image: "/Banner-FD.jpg" },
  ];

  const getBannerByUserName = (name) => {
    const found = arrayBanner.find((banner) => banner.id === name);
    return found ? found.image : "/Banner-default.jpg";
  };

  //chiamaaaaaaa
  const bannerI = getBannerByUserName(myProfile.data?.name);

  //retunr
  return (
    <div className="d-flex flex-column gap-2 mt-0">
      {/* CARD PROFILO */}
      <Card className="overflow-hidden">
        {/* cover */}
        <div>
          <Image src={bannerI} alt="cover" className="w-100 h-100 cover-img" />
        </div>

        <Card.Body className="pt-0">
          <div className="d-flex flex-column align-items-start mt-2">
            {/* avatar */}
            <Image src={myProfile.data?.image} roundedCircle width={72} height={72} className="left-avatar" alt="avatar" />

            <div className="mt-2 fw-semibold">
              {" "}
              {myProfile.data?.name} {myProfile.data?.surname}{" "}
            </div>
            <div className="text-muted fw-semibold small lh-sm">Co-Founder @Xpensive Something | Personal branding | Digital...</div>
            <div className="text-muted small mt-1">{myProfile.data?.area}</div>

            <div className="d-flex align-items-center gap-2 mt-2">
              <div className="fw-semibold small"> 🔥 Xpensive Something </div>
            </div>
          </div>
        </Card.Body>
      </Card>
      {/* CARD STATS */}
      <Card>
        <ListGroup variant="flush">
          <ListGroup.Item className="d-flex justify-content-between align-items-center">
            <span className="fw-semibold small">Visitatori del profilo</span>
            <span className="text-primary fw-semibold small">{stats.random}</span>
          </ListGroup.Item>

          <ListGroup.Item className="d-flex justify-content-between align-items-center">
            <span className="fw-semibold small">Impressioni del post</span>
            <span className="text-primary fw-semibold small">{stats.firstrandom}</span>
          </ListGroup.Item>
        </ListGroup>
      </Card>

      {/* LE MIE PAGINE*/}
      <Card>
        <ListGroup variant="flush">
          <ListGroup.Item className="fw-semibold small">Le mie pagine (3)</ListGroup.Item>

          <ListGroup.Item className="py-2">
            <Row className="align-items-center g-2">
              <Col xs="auto" className="d-none d-xl-block">
                <Image src="https://placecats.com/200/200" className="left-page-logo-img" />
              </Col>

              <Col className="min-w-0">
                <div className="fw-semibold small text-truncate">Xpensive Something</div>
                <div className="text-muted small text-truncate">Attività</div>
              </Col>

              <Col xs="auto" className="text-end">
                <span className="text-primary fw-semibold small">{stats.thirdrandom}</span>
              </Col>
            </Row>
          </ListGroup.Item>

          <ListGroup.Item className="py-2">
            <Row className="align-items-center g-2">
              <Col xs="auto" className="d-none d-xl-block">
                <Image src="https://placecats.com/200/200" className="left-page-logo-img" />
              </Col>

              <Col className="min-w-0">
                <div className="fw-semibold small text-truncate">Bocconi Student</div>
                <div className="text-muted small text-truncate">Attività</div>
              </Col>

              <Col xs="auto" className="text-end">
                <span className="text-primary fw-semibold small">{stats.againrandom}</span>
              </Col>
            </Row>
          </ListGroup.Item>

          <ListGroup.Item className="py-2">
            <Row className="align-items-center g-2">
              <Col xs="auto" className="d-none d-xl-block">
                <Image src="https://placecats.com/200/200" className="left-page-logo-img" />
              </Col>

              <Col className="min-w-0">
                <div className="fw-semibold small text-truncate">Yeah Yeah Yeahs</div>
                <div className="text-muted small text-truncate">Attività</div>
              </Col>

              <Col xs="auto" className="text-end">
                <span className="text-primary fw-semibold small">{stats.secondrandom}</span>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item className="gap-2">
            <div className=" gap-2 my-2 text-muted small ">
              Fai crescere il tuo business piu' velocemente
              <div className="fw-bold small mt-2">Prova la pagina Premium</div>
              <div className="fw-bold small mt-1">Fai pubblicita' su Linkedln</div>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Card>

      {/* CARD BOTTONI FONDO */}
      <Card>
        <ListGroup>
          <ListGroup.Item>
            <i className=" bi bi-bookmark me-2"></i> Elementi salvati
          </ListGroup.Item>

          <ListGroup.Item>
            <i className="bi bi-people me-2"></i> Gruppi
          </ListGroup.Item>

          <ListGroup.Item>
            <i className="bi bi-newspaper me-2"></i> Newsletter
          </ListGroup.Item>

          <ListGroup.Item>
            <i className="bi bi-calendar-event me-2"></i> Eventi
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};

export default LeftSideBar;
