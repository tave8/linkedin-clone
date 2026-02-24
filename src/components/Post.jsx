import { Card, Container, Row, Col, Image, Button, Dropdown } from "react-bootstrap"

const Post = () => {
  const handleClose = () => {
    console.log("Hai cliccato X (chiudi post)")
  }

  const handleMenuAction = (action) => {
    console.log("Menu action:", action)
  }

  return (
    <Card className="mb-3 ">
      <Card.Body className="p-0 mt-3">
        <Container fluid className="p-0">
          {/* HEADER */}
          <Row className="align-items-start g-2 px-3">
            {/* Avatar */}
            <Col xs="auto">
              <Image src="https://placecats.com/200/200" roundedCircle width={50} height={50} alt="Avatar" />
            </Col>

            {/* Nome + info */}
            <Col>
              <div className="fw-semibold lh-sm d-flex align-items-center gap-2">
                <span>Nikolai Golos</span>

                <i className="bi bi-linkedin text-warning small"></i>

                <span className="text-muted">•</span>

                <span className="text-muted small">1°</span>
              </div>
              <div className="text-muted small lh-sm">Product & Growth at Fluently AI ..</div>
              <div>
                <a href="#" className="text-primary small fw-semibold text-decoration-none">
                  Visita il mio sito web
                </a>
              </div>
              <div className="text-muted small d-flex align-items-center gap-1">
                <span>2g</span>
                <span>• Modificato</span>
                <span>•</span>
                <i className="bi bi-globe2"></i>
              </div>
            </Col>

            {/* Azioni destra */}
            <Col xs="auto" className="d-flex align-items-start gap-2">
              {/* Dropdown dei tre puntini */}
              <Dropdown align="end">
                <Dropdown.Toggle as={Button} variant="link" className="p-0 text-muted no-caret custom-toggle">
                  <i className="bi bi-three-dots fs-5"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handleMenuAction("salva")}>
                    <i className="bi bi-bookmark me-2"></i>
                    Salva
                  </Dropdown.Item>

                  <Dropdown.Item onClick={() => handleMenuAction("nascondi")}>
                    <i className="bi bi-eye-slash me-2"></i>
                    Nascondi
                  </Dropdown.Item>

                  <Dropdown.Divider />

                  <Dropdown.Item onClick={() => handleMenuAction("segnala")} className="text-danger">
                    <i className="bi bi-flag me-2"></i>
                    Segnala
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              {/* X */}
              <Button variant="link" className="p-0 text-muted" onClick={handleClose} aria-label="Chiudi">
                <i className="bi bi-x-lg fs-6"></i>
              </Button>
            </Col>
          </Row>

          {/* TESTO */}
          <Row className="mt-3 px-3 lh-5">
            <Col>
              <div>
                Stop paying for apps in the AppStore 🔥
                <br />
                With AI you can recreate ~90% of App Store apps.
              </div>

              <div className="text-muted small fw-semibold mt-2" style={{ cursor: "pointer" }}>
                Mostra traduzione
              </div>
            </Col>
          </Row>

          {/* MEDIA */}
          <Row className="mt-3 g-0">
            <Col className="p-0">
              <div className=" overflow-hidden">
                <Image src="https://placecats.com/600/400" alt="Media" fluid className="px-0  w-100 post-media" />
              </div>
            </Col>
          </Row>

          {/* LIKES ECC */}
          <Row className="mt-3 align-items-center px-3 d-md-none">
            <Col xs="auto" className="text-muted small">
              <div className="d-flex align-items-center">
                {/* Reaction bubbles */}
                <div className="d-flex align-items-center me-2">
                  <div className="reaction-bubble bg-primary text-white">
                    <i className="bi bi-hand-thumbs-up-fill"></i>
                  </div>
                  <div className="reaction-bubble bg-warning text-dark">
                    <i className="bi bi-lightbulb-fill"></i>
                  </div>

                  <div className="reaction-bubble bg-info text-white">
                    <i className="bi bi-emoji-smile-fill"></i>
                  </div>
                </div>

                <span className="text-muted ">256</span>
              </div>
            </Col>
            <Col xs={8} className="text-muted small text-end ms-auto ">
              86 commenti <span className="mx-1">•</span> 13 diffusioni post
            </Col>
          </Row>

          <hr className="my-2" />

          {/* ACTION BAR */}
          <Row className="g-0 align-items-center mx-3 flex-nowrap">
            <Col xs="auto" className="pe-2">
              <Dropdown align="start">
                <Dropdown.Toggle as={Button} variant="link" className="p-0 text-decoration-none avatar-toggle custom-toggle" id="avatar-menu">
                  <div className="d-flex align-items-center">
                    <Image src="https://placecats.com/50/50" roundedCircle width={32} height={32} alt="User" />
                    <i className="bi bi-caret-down-fill ms-1 small text-muted"></i>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => console.log("Reazione: BOH")}>
                    <i className="bi bi-hand-thumbs-up me-2"></i> BOH
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => console.log("Reazione: BOH1")}>
                    <i className="bi bi-heart me-2"></i> BOH1
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => console.log("Reazione: BOH2")}>
                    <i className="bi bi-lightbulb me-2"></i> BOH2
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={() => console.log("Cambia account")}>
                    <i className="bi bi-person me-2"></i> Cambia profilo
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col>
              <Button
                variant="link"
                className=" action-btn w-100 text-muted d-flex flex-column flex-sm-row align-items-center justify-content-center gap-1 text-decoration-none"
              >
                <i className="bi bi-hand-thumbs-up"></i>
                <span className="small fw-semibold ">Consiglia</span>
              </Button>
            </Col>

            <Col>
              <Button
                variant="link"
                className=" action-btn w-100 text-muted d-flex flex-column flex-sm-row align-items-center justify-content-center gap-1 text-decoration-none"
              >
                <i className="bi bi-chat"></i>
                <span className="small fw-semibold">Commenta</span>
              </Button>
            </Col>

            <Col>
              <Button
                variant="link"
                className=" action-btn w-100 text-muted d-flex flex-column flex-sm-row align-items-center justify-content-center gap-1 text-decoration-none"
              >
                <i className="bi bi-repeat"></i>
                <span className="small fw-semibold">Diffondi</span>
              </Button>
            </Col>

            <Col>
              <Button
                variant="link"
                className=" action-btn w-100 text-muted d-flex flex-column flex-sm-row align-items-center justify-content-center gap-1 text-decoration-none"
              >
                <i className="bi bi-send"></i>
                <span className="small fw-semibold">Invia</span>
              </Button>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  )
}

export default Post
