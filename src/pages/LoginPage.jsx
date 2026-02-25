import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card, Alert, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const URL = "https://striveschool-api.herokuapp.com/api/account/login";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    setLoading(true);

    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Autorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTlkZDA3OWI1NTgyMDAwMTU4YzM0NWIiLCJpYXQiOjE3NzE5NTAyMDEsImV4cCI6MTc3MzE1OTgwMX0.6N69jUGpcpXnvr_GZjSy0M4K8eFP-kzHLI-J6RGgzE4",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Credenziali non valide");
        }
        return res.json();
      })
      .then((data) => {
        // salvo il token
        localStorage.setItem("token", data.accessToken);

        // redirect
        navigate("/profile");
      })
      .catch((err) => {
        console.log("errore", err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Container fluid className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <Row>
        <Col>
          <Card style={{ width: "400px" }} className="p-4 shadow">
            <Card.Body>
              <h3 className="text-center mb-4">Accedi</h3>

              {error && <Alert variant="danger">{error}</Alert>}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </Form.Group>

                <Button type="submit" className="w-100" disabled={loading}>
                  {loading ? <Spinner size="sm" /> : "Accedi"}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
