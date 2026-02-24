import { Card, Button, Badge } from "react-bootstrap";
import { BsPlusLg, BsPencil } from "react-icons/bs";

function Skills() {
  const skills = [
    { id: 1, name: "Social Media Marketing", endorsements: 48 },
    { id: 2, name: "Content Strategy", endorsements: 35 },
    { id: 3, name: "Canva", endorsements: 27 },
    { id: 4, name: "Digital Marketing", endorsements: 61 },
    { id: 5, name: "Community Management", endorsements: 19 },
  ];

  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <Card.Title className="fw-bold mb-0">Competenze</Card.Title>
          <div>
            <Button variant="link" className="text-dark p-1">
              <BsPlusLg size={20} />
            </Button>
            <Button variant="link" className="text-dark p-1">
              <BsPencil size={18} />
            </Button>
          </div>
        </div>

        {skills.map((skill, index) => (
          <div key={skill.id}>
            <div className="d-flex justify-content-between align-items-center py-2">
              <div>
                <div className="fw-bold small">{skill.name}</div>
                <div className="text-muted" style={{ fontSize: "12px" }}>
                  {skill.endorsements} conferme
                </div>
              </div>
              <Badge bg="light" text="dark" className="border" style={{ fontSize: "12px" }}>
                +{skill.endorsements}
              </Badge>
            </div>
            {index < skills.length - 1 && <hr className="my-1" />}
          </div>
        ))}

        <div className="text-center mt-2">
          <Button variant="link" className="text-muted text-decoration-none small fw-bold">
            Mostra tutte le competenze →
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Skills;
