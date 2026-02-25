import { Form, Button, Image, Row, Col, Dropdown } from "react-bootstrap"

const PostComments = () => {
  return (
    <div className="px-3 pb-3 mt-2">
      {/* INPUT COMMENTO */}
      <div className="position-relative mb-3">
        <Form.Control type="text" placeholder="Aggiungi un commento..." className="rounded-pill pe-5 comment-input" />
        <div className="position-absolute top-50 end-0 translate-middle-y d-flex align-items-center me-3 gap-2">
          <i className="bi bi-emoji-smile text-muted"></i>
          <i className="bi bi-image text-muted"></i>
        </div>
      </div>

      {/* FILTRO COMMENTI */}
      <div className="small fw-semibold text-muted mb-2" style={{ cursor: "pointer" }}>
        Più rilevanti ▾
      </div>

      {/* COMMENTO HEADER*/}
      <div className="mt-3">
        {/* ROW 1: Avatar | Info | Azioni */}
        <Row className="align-items-start g-2 flex-nowrap comment-head">
          {/* Avatar */}
          <Col xs="auto">
            <Image src="https://placecats.com/80/80" roundedCircle width={40} height={40} alt="Avatar" />
          </Col>

          {/* Info */}
          <Col className="min-w-0">
            <div className="fw-semibold lh-sm d-flex align-items-center gap-2 flex-wrap">
              <span className="text-truncate small">Fabio Fusi</span>
              <i className="bi bi-linkedin text-warning small"></i>
              <span className="text-muted small">• 2°</span>
            </div>

            <div className="text-muted small lh-sm text-truncate">Ti guido …</div>
          </Col>

          {/* DX tempo e dropdown */}
          <Col xs="auto" className="d-flex align-items-start ms-auto flex-shrink-0">
            <div className="d-flex align-items-center gap-2">
              <span className="text-muted small text-nowrap">3 mesi</span>

              <Dropdown align="end">
                <Dropdown.Toggle as={Button} variant="link" className="p-0 text-muted no-caret custom-toggle">
                  <i className="bi bi-three-dots"></i>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>Segnala</Dropdown.Item>
                  <Dropdown.Item>Nascondi</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Col>
        </Row>

        {/* Testo commento + azioni sotto  */}
        <Row className="my-2 ms-4 ps-2">
          <Col className="min-w-0">
            <div className="small mb-3">Ottimo promemoria. Le regole cambiano, e non conoscerle non ti protegge dalle conseguenze…</div>

            <div className="d-flex flex-wrap align-items-center gap-2  text-muted small">
              <span className="fw-semibold" role="button">
                Consiglia
              </span>

              <span>•</span>

              <span className="d-flex align-items-center gap-1">
                <i className="bi bi-hand-thumbs-up "></i>
                <span>9</span>
              </span>

              <span className="fw-semibold" role="button">
                Rispondi
              </span>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default PostComments
