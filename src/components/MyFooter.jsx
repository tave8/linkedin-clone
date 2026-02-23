function MyFooter() {
  const links = [
    "Informazioni",
    "Accessibilità",
    "Centro assistenza",
    "Privacy e condizioni",
    "Opzioni per gli annunci pubblicitari",
    "Pubblicità",
    "Servizi alle aziende",
    "Scarica l'app LinkedIn",
    "Altro",
  ];

  return (
    <div className="text-center py-3 px-2" style={{ fontSize: "12px", color: "#666" }}>
      <div className="d-flex flex-wrap justify-content-center gap-2 mb-2">
        {links.map((link, index) => (
          <a
            key={index}
            href="#"
            className="text-muted text-decoration-none"
            style={{ fontSize: "12px" }}
            onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
            onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
          >
            {link}
          </a>
        ))}
      </div>
      <div className="mt-2 d-flex align-items-center justify-content-center gap-1">
        <strong style={{ color: "#0a66c2", fontSize: "16px" }}>Linked</strong>
        <img src="https://marketplace.canva.com/NA4A8/MAGzNvNA4A8/1/tl/canva-linkedin-icon-MAGzNvNA4A8.png" alt="In" style={{ width: "16px" }} />
        <span className="text-muted">Corporation © 2026</span>
      </div>
    </div>
  );
}

export default MyFooter;
