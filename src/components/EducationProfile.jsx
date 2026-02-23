import { Card, Button } from "react-bootstrap";
import { BsPlusLg, BsPencil } from "react-icons/bs";

function EducationProfile() {
  const educations = [
    {
      id: 1,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Seal_of_the_University_of_Bologna.svg/250px-Seal_of_the_University_of_Bologna.svg.png",
      school: "Alma Mater Studiorum – Università di Bologna",
      degree: "Laurea · Lettere e Filosofia",
      period: "2016 - 2019",
      skills: "3 Abilità",
    },
    {
      id: 2,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/200px-Linkedin_icon.svg.png",
      school: "LUISS – Guido Carli University",
      degree: "Master · Marketing e Comunicazione",
      period: "2019 - 2021",
      skills: "5 Abilità",
    },
  ];

  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <Card.Title className="fw-bold mb-0">Formazione</Card.Title>
          <div>
            <Button variant="link" className="text-dark p-1">
              <BsPlusLg size={20} />
            </Button>
            <Button variant="link" className="text-dark p-1">
              <BsPencil size={18} />
            </Button>
          </div>
        </div>

        {educations.map((edu, index) => (
          <div key={edu.id}>
            <div className="d-flex mb-3">
              <img
                src={edu.logo}
                alt={edu.school}
                className="me-3"
                style={{ width: "48px", height: "48px", objectFit: "contain", borderRadius: "4px", border: "1px solid #e0e0e0", padding: "4px" }}
              />
              <div className="flex-grow-1">
                <div className="fw-bold">{edu.school}</div>
                <div className="text-muted small">{edu.degree}</div>
                <div className="text-muted small">{edu.period}</div>
                <div className="small mt-1" style={{ color: "#0a66c2" }}>
                  {edu.skills}
                </div>
              </div>
            </div>
            {index < educations.length - 1 && <hr className="my-2" />}
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

export default EducationProfile;
