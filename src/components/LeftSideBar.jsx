import { Card, Image, ListGroup, Row, Col, Spinner, Alert } from "react-bootstrap";
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

  const isLoadingProfile = myProfile.isLoading;
  const profileError = myProfile.isError; // da redux perche no fetch

  const arrayBanner = [
    { id: "giorgia", image: "/Banner-GR.jpg" },
    { id: "giulia", image: "/Banner-GC.jpg" },
    { id: "giuseppe", image: "/Banner-GT.jpg" },
    { id: "raffaele", image: "/Banner-RB.jpg" },
    { id: "francesco", image: "/Banner-FD.jpg" },
  ];

  const getBannerByUserName = (name) => {
    if (!name) return "/Banner-GT.jpg"; // fallback sicuro

    const found = arrayBanner.find((banner) => banner.id === name.toLowerCase());

    return found ? found.image : "/Banner-GT.jpg";
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
          {/* ERRORE */}
          {profileError && (
            <Alert variant="danger" className="mt-3 mb-0">
              Errore sincronizzazione profilo.
            </Alert>
          )}

          {/* LOADING */}
          {isLoadingProfile && !profileError && (
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: 140 }}>
              <Spinner animation="border" variant="primary" role="status" />
            </div>
          )}
          {!isLoadingProfile && !profileError && (
            <div className="d-flex flex-column align-items-start mt-2">
              {/* avatar */}
              <Image src={myProfile.data?.image} roundedCircle width={72} height={72} className="left-avatar" alt="avatar" style={{ objectFit: "cover" }} />

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
          )}
        </Card.Body>
      </Card>
      {/* CARD STATS */}
      <Card>
        <ListGroup variant="flush">
          <ListGroup.Item className="d-flex justify-content-between align-items-center sidebar-hover">
            <span className="fw-semibold small">Visitatori del profilo</span>
            <span className="text-primary fw-semibold small">{stats.random}</span>
          </ListGroup.Item>

          <ListGroup.Item className="d-flex justify-content-between align-items-center sidebar-hover">
            <span className="fw-semibold small">Impressioni del post</span>
            <span className="text-primary fw-semibold small">{stats.firstrandom}</span>
          </ListGroup.Item>
        </ListGroup>
      </Card>

      {/* LE MIE PAGINE*/}
      <Card>
        <ListGroup variant="flush">
          <ListGroup.Item className="fw-semibold small sidebar-hover">Le mie pagine (3)</ListGroup.Item>

          <ListGroup.Item className="py-2 sidebar-hover">
            <Row className="align-items-center g-2">
              <Col xs="auto" className="d-none d-xl-block ">
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

          <ListGroup.Item className="py-2 sidebar-hover">
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

          <ListGroup.Item className="py-2 sidebar-hover">
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
            <div className="my-2 text-muted small">
              Fai crescere il tuo business più velocemente
              <div className="fw-bold small mt-2">
                <a href="#" className="sidebar-link">
                  Prova la pagina Premium
                </a>
              </div>
              <div className="fw-bold small mt-1">
                <a href="#" className="sidebar-link">
                  Fai pubblicità su LinkedIn
                </a>
              </div>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Card>

      {/* CARD BOTTONI FONDO */}
      <Card>
        <ListGroup>
          <ListGroup.Item className="sidebar-hover">
            <i className=" bi bi-bookmark me-2"></i> Elementi salvati
          </ListGroup.Item>

          <ListGroup.Item className="sidebar-hover">
            <i className="bi bi-people me-2"></i> Gruppi
          </ListGroup.Item>

          <ListGroup.Item className="sidebar-hover">
            <i className="bi bi-newspaper me-2"></i> Newsletter
          </ListGroup.Item>

          <ListGroup.Item className="sidebar-hover">
            <i className="bi bi-calendar-event me-2"></i> Eventi
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};

export default LeftSideBar;
