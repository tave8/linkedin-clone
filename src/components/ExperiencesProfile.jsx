import { Card, Button } from "react-bootstrap";
import { BsPlusLg, BsPencil } from "react-icons/bs";

function ExperiencesProfile() {
  const experiences = [
    {
      id: 1,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/200px-Amazon_logo.svg.png",
      role: "Social Media Manager",
      company: "Amazon",
      period: "gen 2023 - Presente · 2 anni 2 mesi",
      location: "Milano, Lombardia, Italia",
      description: "Ho gestito le strategie digitali per l'Italia su Facebook, supporto in molte attività della mia azienda e più competenze...",
      skills: "Social Media Strategy, Gestione contenuti · 6 competenze",
    },
    {
      id: 2,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Pinterest-logo.png/600px-Pinterest-logo.png",
      role: "Freelancer",
      company: "Libero professionista",
      period: "ott 2021 - dic 2022 · 1 anno 3 mesi",
      location: "Milano, Italia",
      description: "Ho avuto la possibilità di lavorare su Execution e di fyre le risorse digitali, affrontare direttamente qualsiasi problema...",
      skills: "Canva, LearnWorld · 4 competenze",
    },
    {
      id: 3,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/200px-Linkedin_icon.svg.png",
      role: "Social Media Manager",
      company: "Milanese Marica",
      period: "2019 - 2021 · 2 anni · Freelance",
      location: "Milano, Lombardia, Italia",
      description: "Ho guidato le strategie digitali per l'Italia su Facebook, supporto in molte attività della mia azienda e più competenze...",
      skills: "Social Media Strategy, Gestione contenuti · 2 competenze",
    },
  ];

  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <Card.Title className="fw-bold mb-0">Esperienza</Card.Title>
          <div>
            <Button variant="link" className="text-dark p-1">
              <BsPlusLg size={20} />
            </Button>
            <Button variant="link" className="text-dark p-1">
              <BsPencil size={18} />
            </Button>
          </div>
        </div>

        {experiences.map((exp, index) => (
          <div key={exp.id}>
            <div className="d-flex mb-3">
              <img
                src={exp.logo}
                alt={exp.company}
                className="me-3"
                style={{ width: "48px", height: "48px", objectFit: "contain", borderRadius: "4px", border: "1px solid #e0e0e0", padding: "4px" }}
              />
              <div className="flex-grow-1">
                <div className="fw-bold">{exp.role}</div>
                <div className="text-muted small">{exp.company}</div>
                <div className="text-muted small">{exp.period}</div>
                <div className="text-muted small">{exp.location}</div>
                <div className="small mt-1">{exp.description}</div>
                <div className="small text-muted mt-1">
                  <span style={{ color: "#0a66c2", fontWeight: "500" }}>Competenze: </span>
                  {exp.skills}
                </div>
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
