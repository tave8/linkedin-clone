import { Card, Button, Spinner, Modal, Form } from "react-bootstrap";
import { BsPlusLg, BsPencil } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ExperienceAPI from "../assets/js/experience-api/ExperienceAPI";
import ExPlaceholder from "../../public/Esperienza.jpg";
function ExperiencesProfile() {
  const myProfile = useSelector((state) => state.myProfile);
  const profileId = myProfile.data._id;

  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });

  //  GET

  useEffect(() => {
    if (!profileId) return;
    const experienceAPI = new ExperienceAPI();

    experienceAPI
      .getExperiencesOfProfile(profileId)
      .then((data) => {
        setExperiences(data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [profileId]);

  // POST

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!profileId) return;
    setSaving(true);

    const experienceAPI = new ExperienceAPI({ apiUser: "team" });
    const body = {
      ...formData,
      endDate: formData.endDate || null,
    };

    experienceAPI
      .addExperienceToMyProfile(body)
      .then(() => {
        return new ExperienceAPI().getExperiencesOfProfile(profileId);
      })
      .then((data) => {
        setExperiences(data);
        handleCloseModal();
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setSaving(false);
      });
  };

  // Modal

  const handleOpenModal = () => {
    setFormData({ role: "", company: "", startDate: "", endDate: "", description: "", area: "" });
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Card className="mb-3 shadow-sm">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <Card.Title className="fw-bold mb-0 fs-5">Esperienza</Card.Title>
            <div>
              <Button variant="link" className="text-dark p-1" onClick={handleOpenModal}>
                <BsPlusLg size={20} />
              </Button>
              <Button variant="link" className="text-dark p-1">
                <BsPencil size={18} />
              </Button>
            </div>
          </div>

          {loading && (
            <div className="text-center">
              <Spinner animation="border" size="sm" />
            </div>
          )}

          {!loading && experiences.length === 0 && <p className="text-muted">Nessuna esperienza trovata.</p>}

          {!loading &&
            experiences.map((exp, index) => (
              <div key={exp._id}>
                <div className="d-flex mb-3">
                  <img
                    src={exp.image || ExPlaceholder}
                    alt={exp.company}
                    className="me-3"
                    style={{ width: "48px", height: "48px", objectFit: "cover", borderRadius: "6px", border: "1px solid #e0e0e0" }}
                  />
                  <div className="flex-grow-1">
                    <div className="fw-bold">{exp.role}</div>
                    <div className="text-muted small">{exp.company}</div>
                    <div className="text-muted small">
                      {exp.startDateForUI} - {exp.endDateForUI ?? "Presente"}
                    </div>
                    <div className="text-muted small">{exp.area}</div>
                    <div className="small mt-1">{exp.description}</div>
                  </div>
                </div>
                {index < experiences.length - 1 && <hr className="my-2" />}
              </div>
            ))}

          <div className="text-center mt-2">
            <Button variant="link" className="text-muted text-decoration-none small fw-bold">
              Mostra tutto →
            </Button>
          </div>
        </Card.Body>
      </Card>

      {/* FORM */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title className="fs-6 fw-bold">Aggiungi esperienza</Modal.Title>
        </Modal.Header>

        <Form onSubmit={handleSubmit}>
          <Modal.Body className="d-flex flex-column gap-3">
            <Form.Group>
              <Form.Label className="small fw-semibold">Ruolo *</Form.Label>
              <Form.Control type="text" name="role" value={formData.role} onChange={handleChange} placeholder="es. Full Stack Developer" required />
            </Form.Group>

            <Form.Group>
              <Form.Label className="small fw-semibold">Azienda *</Form.Label>
              <Form.Control type="text" name="company" value={formData.company} onChange={handleChange} placeholder="es. FizzBuzz" required />
            </Form.Group>

            <div className="d-flex gap-2">
              <Form.Group className="flex-grow-1">
                <Form.Label className="small fw-semibold">Data inizio *</Form.Label>
                <Form.Control type="date" name="startDate" value={formData.startDate} onChange={handleChange} required />
              </Form.Group>

              <Form.Group className="flex-grow-1">
                <Form.Label className="small fw-semibold">Data fine</Form.Label>
                <Form.Control type="date" name="endDate" value={formData.endDate} onChange={handleChange} />
                <Form.Text className="text-muted">Lascia vuoto se attuale</Form.Text>
              </Form.Group>
            </div>

            <Form.Group>
              <Form.Label className="small fw-semibold">Area / Città *</Form.Label>
              <Form.Control type="text" name="area" value={formData.area} onChange={handleChange} placeholder="es. Milan" required />
            </Form.Group>

            <Form.Group>
              <Form.Label className="small fw-semibold">Descrizione *</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Descrivi brevemente il tuo ruolo..."
                required
              />
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="outline-secondary" size="sm" onClick={handleCloseModal} disabled={saving}>
              Annulla
            </Button>
            <Button variant="primary" size="sm" type="submit" disabled={saving}>
              {saving ? <Spinner animation="border" size="sm" className="me-1" /> : null}
              Salva
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default ExperiencesProfile;
