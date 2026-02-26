import { Card, Button, Spinner } from "react-bootstrap";
import { BsPlusLg, BsPencil } from "react-icons/bs";
import { useEffect, useState } from "react";
import ExperienceAPI from "./demo/experience-api/ExperienceAPI";

function ExperiencesProfile({ userId, token }) {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  const experienceAPI = ExperienceAPI({ apiUser: userId, token });

  // FETCH GET

  useEffect(() => {
    setLoading(true);

    experienceAPI
      .getExperiences(userId)
      .then((data) => {
        setExperiences(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [userId]);

  // (POST)

  const handleAddExperience = () => {
    const experienceFields = {
      role: "Full Stack Web Developer",
      company: "FizzBuzz",
      startDate: "2022-06-16",
      endDate: "2023-06-16",
      description: "Implementing new features",
      area: "Milan",
    };

    experienceAPI
      .addExperienceToMyProfile(experienceFields)
      .then((newExperience) => {
        setExperiences((prev) => [...prev, newExperience]);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <Card.Title className="fw-bold mb-0 fs-5">Esperienza</Card.Title>

          <div>
            <Button variant="link" className="text-dark p-1" onClick={handleAddExperience}>
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
                  src={exp.image ? exp.image : "https://via.placeholder.com/48"}
                  alt={exp.company}
                  className="me-3"
                  style={{
                    width: "48px",
                    height: "48px",
                    objectFit: "cover",
                    borderRadius: "6px",
                    border: "1px solid #e0e0e0",
                  }}
                />

                <div className="flex-grow-1">
                  <div className="fw-bold">{exp.role}</div>
                  <div className="text-muted small">{exp.company}</div>
                  <div className="text-muted small">
                    {new Date(exp.startDate).toLocaleDateString()} - {exp.endDate ? new Date(exp.endDate).toLocaleDateString() : "Presente"}
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
  );
}

export default ExperiencesProfile;
