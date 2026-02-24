import { Card, Button } from "react-bootstrap";
import { BsPlusLg, BsPencil } from "react-icons/bs";

function Organization() {
  const organizations = [
    {
      id: 1,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/200px-Linkedin_icon.svg.png",
      name: "AI Associazione Italiana Informatici",
      role: "Socio Sostenitore",
      period: "lug 2019 – presente",
    },
  ];

  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <Card.Title className="fw-bold mb-0">Organizzazioni</Card.Title>
          <div>
            <Button variant="link" className="text-dark p-1">
              <BsPlusLg size={20} />
            </Button>
            <Button variant="link" className="text-dark p-1">
              <BsPencil size={18} />
            </Button>
          </div>
        </div>

        {organizations.map((org) => (
          <div key={org.id} className="d-flex mb-2">
            <img
              src={org.logo}
              alt={org.name}
              className="me-3"
              style={{ width: "48px", height: "48px", objectFit: "contain", borderRadius: "4px", border: "1px solid #e0e0e0", padding: "4px" }}
            />
            <div>
              <div className="fw-bold small">{org.name}</div>
              <div className="text-muted small">{org.role}</div>
              <div className="text-muted small">{org.period}</div>
            </div>
          </div>
        ))}
      </Card.Body>
    </Card>
  );
}

export default Organization;
