import { useEffect, useState } from "react";
import { Container, Row, Col, Form, InputGroup, Card, Badge, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const JobsPage = function () {
  const [query, setQuery] = useState("");
  const [job, setjob] = useState([]);

  const URL = `https://strive-benchmark.herokuapp.com/api/jobs?search=${query} `;

  useEffect(() => {
    fetch(URL)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("errore");
        }
      })
      .then((data) => {
        const dati = data.data;
        console.log(dati);
        setjob(dati);
      })
      .catch((err) => {
        console.log("errore", err);
      });
  }, [query]);

  return (
    <div className="bg-light min-vh-100 py-5">
      <Container>
        <Row className="mb-4">
          <Col>
            <p className="text-uppercase text-muted fw-semibold small mb-1" style={{ letterSpacing: "0.1em" }}>
              Opportunità selezionate
            </p>
            <h1 className="fw-bold display-5 mb-2">
              Trova il tuo <span className="fst-italic text-primary">prossimo ruolo.</span>
            </h1>
            <p className="text-muted">Posizioni in evidenza aggiornate ogni giorno.</p>
          </Col>
        </Row>

        {/* Search */}
        <Row className="mb-4">
          <Col md={8} lg={6}>
            <InputGroup>
              <InputGroup.Text className="bg-white border-end-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6c757d" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </InputGroup.Text>
              <Form.Control
                className="bg-white border-start-0 ps-0"
                type="text"
                placeholder="Cerca ruolo, azienda o skill…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              {query && (
                <Button variant="outline-secondary" onClick={() => setQuery("")}>
                  ✕
                </Button>
              )}
            </InputGroup>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col className="d-flex justify-content-between align-items-center">
            <span className="text-uppercase fw-semibold small" style={{ letterSpacing: "0.08em" }}>
              In evidenza
            </span>
            <span className="text-muted small">{job.length} posizioni</span>
          </Col>
        </Row>

        {/* LAvori in evidenza*/}
        <Row className="g-3">
          {job.length === 0 && (
            <Col>
              <div className="text-center py-5 text-muted">
                <div style={{ fontSize: 32 }}>🔍</div>
                <p className="mt-2">
                  Nessun risultato per "<strong>{query}</strong>"
                </p>
              </div>
            </Col>
          )}

          {job.map((j) => (
            <Col xs={12} key={j._id}>
              <Card className="border shadow-sm">
                <Card.Body className="p-4">
                  <Row className="align-items-start g-3">
                    <Col>
                      <div className="d-flex justify-content-between align-items-start flex-wrap gap-3">
                        <div>
                          <div className="fw-semibold fs-6 mb-1">{j.title}</div>
                          <div className="text-muted small mb-2">{j.company_name}</div>
                          <div className="d-flex align-items-center gap-1 text-muted small mb-2">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                              <circle cx="12" cy="10" r="3" />
                            </svg>
                            {j.candidate_required_location}
                          </div>
                        </div>

                        <div className="d-flex flex-column align-items-end gap-2">
                          <div className="d-flex align-items-center gap-2">
                            <small className="text-muted">{j.publication_date}</small>
                            <Badge bg="secondary" className="fw-normal">
                              {j.job_type}
                            </Badge>
                          </div>
                          <span className="fw-semibold">{j.salary}</span>
                          <Button variant="outline-dark" size="sm">
                            Candidati →
                          </Button>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default JobsPage;
