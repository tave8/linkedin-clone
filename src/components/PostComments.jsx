import { Card, Form, Button, Image, Row, Col, Dropdown } from "react-bootstrap"

const PostComments = () => {
  return (
    <div className="px-3 pb-3 mt-2">
      {/* INPUT COMMENTO */}
      <div className="position-relative mb-3">
        <Form.Control type="text" placeholder="Aggiungi un commento..." className="rounded-pill pe-5 comment-input" />

        {/* Icone dentro l'input */}
        <div className="position-absolute top-50 end-0 translate-middle-y d-flex align-items-center me-3 gap-2">
          <i className="bi bi-emoji-smile text-muted"></i>
          <i className="bi bi-image text-muted"></i>
        </div>
      </div>
      {/* FILTRO COMMENTI */}
      <div className="small fw-semibold text-muted mb-2" style={{ cursor: "pointer" }}>
        Più rilevanti ▾
      </div>

      {/* COMMENTI */}
      {/* COMMENTO 1 */}
      <Row className="align-items-start g-2 mt-3">
        {/* Avatar */}
        <Col xs="auto">
          <Image src="https://placecats.com/80/80" roundedCircle width={40} height={40} alt="Avatar" />
        </Col>

        {/* Corpo commento */}
        <Col className="min-w-0">
          <div>
            {/* Header dentro la bolla */}
            <div className="d-flex justify-content-between align-items-start gap-2">
              <div className="min-w-0">
                <div className="d-flex align-items-center gap-1 flex-wrap">
                  <span className="fw-semibold small">Fabio Fusi</span>
                  <i className="bi bi-linkedin text-warning small"></i>
                  <span className="text-muted small">• 2°</span>
                </div>

                <div className="text-muted small lh-sm text-truncate">Ti guido a stendere il testamento e a valutare i rischi…</div>
              </div>

              {/* Tempo + menu */}
              <div className="d-flex align-items-center gap-2 flex-shrink-0">
                <span className="text-muted small">3 mesi</span>

                <Dropdown align="end">
                  <Dropdown.Toggle as={Button} variant="link" className="p-0 text-muted custom-toggle no-caret">
                    <i className="bi bi-three-dots"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>Segnala</Dropdown.Item>
                    <Dropdown.Item>Nascondi</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>

            {/* Testo commento */}
            <div className="small mt-2">Ottimo promemoria. Le regole cambiano, e non conoscerle non ti protegge dalle conseguenze…</div>
          </div>

          {/* Azioni sotto */}
          <div className="d-flex align-items-center gap-2 mt-1 text-muted small">
            <span style={{ cursor: "pointer" }} className="fw-semibold">
              Consiglia
            </span>
            <span>•</span>{" "}
            <span className="ms-2 d-flex align-items-center gap-1">
              <i className="bi bi-hand-thumbs-up-fill text-primary"></i>
              <span>9</span>
            </span>
            <span style={{ cursor: "pointer" }} className="fw-semibold">
              Rispondi
            </span>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default PostComments
