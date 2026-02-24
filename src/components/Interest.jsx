import { Card, Button, Nav } from "react-bootstrap";
import { useState } from "react";

function Interest() {
  const [activeTab, setActiveTab] = useState("aziende");

  const interests = {
    aziende: [
      {
        id: 1,
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/200px-Amazon_logo.svg.png",
        name: "Amazon",
        followers: "30 mln follower",
      },
      {
        id: 2,
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Google_Favicon_2025.svg/250px-Google_Favicon_2025.svg.png",
        name: "Google",
        followers: "28 mln follower",
      },
      {
        id: 3,
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/200px-Linkedin_icon.svg.png",
        name: "LinkedIn",
        followers: "15 mln follower",
      },
    ],
    gruppi: [
      {
        id: 1,
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/200px-Linkedin_icon.svg.png",
        name: "Digital Marketing Italia",
        followers: "12.450 membri",
      },
      {
        id: 2,
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/200px-Linkedin_icon.svg.png",
        name: "Social Media Managers Italia",
        followers: "8.320 membri",
      },
    ],
    newsletter: [
      {
        id: 1,
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/200px-Linkedin_icon.svg.png",
        name: "Marketing Weekly",
        followers: "5.200 iscritti",
      },
    ],
    scuole: [
      {
        id: 1,
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Seal_of_the_University_of_Bologna.svg/250px-Seal_of_the_University_of_Bologna.svg.png",
        name: "Università di Bologna",
        followers: "120.000 follower",
      },
    ],
  };

  const tabs = [
    { key: "aziende", label: "Aziende" },
    { key: "gruppi", label: "Gruppi" },
    { key: "newsletter", label: "Newsletter" },
    { key: "scuole", label: "Scuole" },
  ];

  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>
        <Card.Title className="fw-bold mb-3">Interessi</Card.Title>

        <Nav variant="tabs" className="mb-3">
          {tabs.map((tab) => (
            <Nav.Item key={tab.key}>
              <Nav.Link
                active={activeTab === tab.key}
                onClick={() => setActiveTab(tab.key)}
                className="text-decoration-none"
                style={{ cursor: "pointer", color: activeTab === tab.key ? "#0a66c2" : "#666" }}
              >
                {tab.label}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>

        {interests[activeTab].map((item, index) => (
          <div key={item.id}>
            <div className="d-flex align-items-center justify-content-between py-2">
              <div className="d-flex align-items-center">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="me-3"
                  style={{ width: "48px", height: "48px", objectFit: "contain", borderRadius: "4px", border: "1px solid #e0e0e0", padding: "4px" }}
                />
                <div>
                  <div className="fw-bold small">{item.name}</div>
                  <div className="text-muted small">{item.followers}</div>
                </div>
              </div>
              <Button size="sm" variant="outline-secondary" className="rounded-pill text-decoration-none">
                Segui
              </Button>
            </div>
            {index < interests[activeTab].length - 1 && <hr className="my-1" />}
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

export default Interest;
