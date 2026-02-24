import { Card, Button } from "react-bootstrap";
import { BsPlusLg, BsPencil } from "react-icons/bs";

function LicencesProfile() {
  const licences = [
    {
      id: 1,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/200px-Linkedin_icon.svg.png",
      name: "LinkedIn Content and Creative Design",
      issuer: "LinkedIn",
      date: "Rilasciato: apr 2024 · Nessuna scadenza",
      credentialId: "Mostra credenziale →",
    },
    {
      id: 2,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Google_Favicon_2025.svg/960px-Google_Favicon_2025.svg.png",
      name: "Google Digital Training",
      issuer: "Google",
      date: "Rilasciato: feb 2023 · Nessuna scadenza",
      credentialId: "Mostra credenziale →",
    },
  ];

  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <Card.Title className="fw-bold mb-0">Licenze e certificazioni</Card.Title>
          <div>
            <Button variant="link" className="text-dark p-1">
              <BsPlusLg size={20} />
            </Button>
            <Button variant="link" className="text-dark p-1">
              <BsPencil size={18} />
            </Button>
          </div>
        </div>

        {licences.map((lic, index) => (
          <div key={lic.id}>
            <div className="d-flex mb-3">
              <img
                src={lic.logo}
                alt={lic.issuer}
                className="me-3"
                style={{ width: "48px", height: "48px", objectFit: "contain", borderRadius: "4px", border: "1px solid #e0e0e0", padding: "4px" }}
              />
              <div className="flex-grow-1">
                <div className="fw-bold">{lic.name}</div>
                <div className="text-muted small">{lic.issuer}</div>
                <div className="text-muted small">{lic.date}</div>
                <Button size="sm" variant="outline-secondary" className="mt-2 text-decoration-none small">
                  {lic.credentialId}
                </Button>
              </div>
            </div>
            {index < licences.length - 1 && <hr className="my-2" />}
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

export default LicencesProfile;
